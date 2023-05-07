import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Link, useLocation} from 'react-router-dom';
const ProductCard = (props) => {
    const {grid} = props; 
let location = useLocation ();
 console.log(location);

  return (
    <>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}> 
     <Link to="product/:id" className="product-card position-relative">
     <div className="wishlist-icon position-absolute">
        <button className='border-0 bg-transparent'><img src="img/wish.svg" alt="wishlist" /></button>
     </div>
        <div className="product-img">
            <img src="img/watch.jpg" className='img-fluid' alt="product img" />
            <img src="img/we.avif" className='img-fluid' alt="product img" />

        </div>
        <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
                Lorem ipsum dolor sit amet consectetur
            </h5>
            <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value={4} 
            edit={false}
            />
            <p className={`description ${grid === 12 ? "d-block": "d-none"}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae esse harum, ullam nobis iste nam maiores, vero modi quasi tempore sequi aperiam dignissimos? Facilis ab, perferendis consequuntur odit assumenda vel.
            </p>
            <p className="price">$120.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <button className='border-0 bg-transparent'><img src="img/prodcompare.svg" alt="prodcompare" /></button>
                <button className='border-0 bg-transparent'><img src="img/view.svg" alt="view" /></button>
                <button className='border-0 bg-transparent'><img src="img/add-cart.svg" alt="addcart" /></button>

            </div>
        </div>
     </Link>
     </div>

     <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}> 
     <Link className="product-card position-relative">
     <div className="wishlist-icon position-absolute">
        <Link><img src="img/wish.svg" alt="wishlist" /></Link>
     </div>
        <div className="product-img">
            <img src="img/watch.jpg" className='img-fluid' alt="product img" />
            <img src="img/we.avif" className='img-fluid' alt="product img" />

        </div>
        <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
                Lorem ipsum dolor sit amet consectetur
            </h5>
            <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value={4} 
            edit={false}
            />
             <p className={`description ${grid === 12 ? "d-block": "d-none"}`}  >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nobis eos provident quo optio dolore similique sit a, blanditiis perferendis, minima excepturi placeat reprehenderit quas vel pariatur asperiores sequi necessitatibus!
             </p>
            <p className="price">$120.00</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <button className='border-0 bg-transparent'><img src="img/prodcompare.svg" alt="prodcompare" /></button>
                <button className='border-0 bg-transparent'><img src="img/view.svg" alt="view" /></button>
                <button className='border-0 bg-transparent'><img src="img/add-cart.svg" alt="addcart" /></button>

            </div>
        </div>
     </Link>
     </div>
    </>

    

    
  )
}

export default ProductCard
