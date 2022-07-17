import React from 'react'

type Props = {}

const BannerSlider = (props: Props) => {
  return (
    <div className=''>
      <div className='d-flex' style={{height: 'auto'}}>
        <div className='slider-wrapper col-12'>
          {/* <h4 className="text-purple px-3 py-2">Top Deals</h4> */}
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://via.placeholder.com/728x300.png?text=1st+slide" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/728x300.png?text=2nd+slide" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://via.placeholder.com/728x300.png?text=3rd+slide" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* <div className="d-none px-2">
          <h4 className="text-purple px-3 py-2">Categories</h4>
          <div className="py-3 px-2 align-middle" style={{borderRadius: '2px', backgroundColor: '#d5d5d5'}}>
            <ul>
              <li className='text-purple fw-bold mb-2'>Jewelry</li>
              <li className='text-purple fw-bold mb-2'>Men's Fashion</li>
              <li className='text-purple fw-bold mb-2'>Women's Fashion</li>
              <li className='text-purple fw-bold mb-2'>Electronics</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default BannerSlider