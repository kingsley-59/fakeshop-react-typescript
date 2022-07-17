import { useEffect, useState, useReducer } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

import Products from '../data/Products'

interface Props { }

interface SearchAndFilterProps extends Props {
    // setCategory: React.Dispatch<React.SetStateAction<string>>
    setCategory: (category: string) => void
}

type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

const SearchAndFilter = ({setCategory}: SearchAndFilterProps) : JSX.Element => {
    return (
        <div className="container">
            <div className="form-group">
                <select className="select form-control" onChange={e => setCategory(e.target.value)}>
                    <option value="">--select category--</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
        </div>
    )
}

function filterProductsBasedOnCategory(category: string, products: Product[]) : {result: Product[]; count: number;} {
    if (category === '') {
        return {
            result: products,
            count: products.length
        }
    }
    const result = products.filter(product => product.category === category)
    const count = result.length

    return {
        result, count
    }
}

const initialStateOfInventory = {
    products: [] as Product[],
    filterResult: [] as Product[],
    category: '',
    sort: ''
}

type ACTIONTYPE = 
    | { type: 'set-category', payload: string}
    | { type: 'clear-category', payload: null}
    | { type: 'set-products', payload: Product[] }

function reducer (inventory: typeof initialStateOfInventory, action: ACTIONTYPE) {
    switch (action.type) {
        case 'set-category':
            let {result, count} = filterProductsBasedOnCategory(action.payload, inventory.products)
            console.log(inventory.filterResult.length)
            console.log('Total results: ', count)
            console.log(result)
            inventory.filterResult = result
            return inventory
        case 'set-products':
            inventory.products = action.payload
            return inventory
        case 'clear-category':
            inventory.category = ''
            inventory.products = initialStateOfInventory.products
            return inventory
        default:
            return inventory
    }
}

const ProductsSection = () => {
    const [inventory, dispatch] = useReducer(reducer, initialStateOfInventory)
    const [displayProducts, setDisplayProducts] = useState([])

    const setCategory = (category: string) => {
        dispatch({type: 'set-products', payload: displayProducts})
        dispatch({type: 'set-category', payload: category})
    }

    useEffect(() => {
        async function getProducts() {
            try {
                console.log('loading...')
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()

                if (data) console.log('data fetching complete!')
                setDisplayProducts(data)
                dispatch({type: 'set-products', payload: data})
            } catch (error) {
                console.log("Couldn't fetch data.")
            }
        }

        getProducts()
    }, [])

    return (
        <div className="container">
            <SearchBar />
            {/* <SearchAndFilter setCategory={setCategory} /> */}
            <div className="row">
                {
                    displayProducts.map((item, idx) => (
                        <ProductCard item={item} key={idx} />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsSection;
