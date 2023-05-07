import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';



function SpecialProduct() {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
         <div className="d-flex justify-content-between">
          <div>
          <img src="img/watch.jpg" className='img-fluid' alt="watch" id='q' />
          </div>
         

         <div className="special-product-content">
          <h5 className="brand">Havels</h5>
          <h6 className="title">
            Redmi y2 Mobile Phone; Sim...
          </h6>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value={4} 
            edit={false}
            />
            <p className="price"><span className='red-p'>$120</span> &nbsp;<strike>$200</strike></p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className='mb-0'><b>5</b>days</p>
              <div className="d-flex gap-10  align-items-center">
                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                <span className='badge rounded-circle p-2 bg-danger'>1</span>
              </div>
              <div className="prod-count my-3">
                <p>Products : 5 </p>
              <div className="progress">
                <div class="progress-bar" 
                role="progressbar" 
                style={{width:'30%'}}
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100">
                </div>
              </div>
              </div>
              <Link className="btn">Add to Cart</Link>
            </div>
            </div>
         </div>
      </div>
    </div>
  )
  }
export default SpecialProduct
