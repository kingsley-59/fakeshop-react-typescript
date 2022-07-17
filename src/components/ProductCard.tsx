import React from 'react'

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

interface ProductCardProps {
    item: Product
}

const ProductCard = ({item}: ProductCardProps) => {
    const {image, title, price, rating} = item
    const wrapperStyle = {
        borderRadius: '15px',
        height: 'auto'
    }
    const productImageStyle = {
        height: '150px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '1px #eee solid'
    }
    return (
        <div className="col-6 col-md-4 col-lg-3 my-2 p-lg-4">
            <div className="bg-white shadow-sm text-purple" style={wrapperStyle}>
                <div className="product-image" style={productImageStyle}>
                    {/* <img src={image} alt="" width='100%' height='100%' /> */}
                </div>
                <div className="product-details bg-light d-flex flex-column justify-content-evenly p-3" >
                    <span>{title}</span><br />
                    <div className="d-flex align-item-center justify-content-between">
                        <span className='fw-bold'>${price}</span>
                        <span className=''>{rating.rate}{' '}<i className="bi bi-star-fill text-gold"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard