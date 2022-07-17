import React from 'react'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div className='p-3'>
        <div className="d-flex justify-content-center align-item-center">
            <div className="col-2 text-center">
                <span className="text-magenta fs-2"><i className="bi bi-filter-circle-fill"></i></span>
            </div>
            <div className="col-8 ">
                <div className="searc-input d-flex align-item-center border p-2" style={{borderRadius: '15px'}}>
                    <i className="bi bi-search align-middle text-muted mx-2 btn p-0"></i>
                    <input type="search" className='form-control border-0 p-0' placeholder='search products...' />
                </div>
            </div>
            <div className="col-2 text-center">
                <span className="text-magenta fs-2"><i className="bi bi-cart-check-fill" ></i></span>
            </div>
        </div>
    </div>
  )
}

export default SearchBar