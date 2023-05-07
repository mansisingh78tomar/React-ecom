import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import Cart from '../Pages/Cart';

function Header() {
  return (
    <>
     <header className='header-top-strip py-3'>
       <div className='container-xl'>
         <div className='row'>
           <div className='col-6'>
             <p className='text-white mb-0'>Free Shipping Over $150 $ Free Returns</p>
           </div>
           <div className='col-6'>
             <p className='text-end text-white mb-0'>
               Hotline: <a href='tel: +91 9759231920' className='text-white'>  +91 9759241920</a> 
             </p>
           </div>
         </div>
       </div>
     </header>

     <header className='header-upper py-3 '>
       <div className='container-xl'> 
         <div className='row align-items-center'>
           <div className='col-2'>
             <h1>
               <Link className='text-white'>Bonik.</Link>
             </h1>
           </div>
           <div className='col-5'>
           <div className="input-group ">
            <input type="text" className="form-control py-2"
             placeholder="Search products..." 
             aria-label="Search products..."
             aria-describedby="basic-addon2" />
            <span className="input-group-text p-2"  id="basic-addon2"><BsSearch className='fs-6' /></span>
           </div>
           </div>
           <div className='col-5'>
             <div className='header-upper-links d-flex align-items-center justify-content-between'>
               <div>
                 <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                   <img src='img/compare.svg' alt='compare' />
                   <p className='mb-0'>
                     compare <br /> products
                   </p>
                 </Link>
               </div>
               <div> 
                 <Link to='wishlist' className='d-flex align-items-center gap-10 text-white'>
                 <img src='img/wishlist.svg' alt='wishlist' />
                   <p className='mb-0'>
                     Favourite <br /> wishlist
                   </p>
                 </Link>
               </div>
               <div>
                 <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                   <img src='img/user.svg' alt='login' />
                   <p className='mb-0'>
                     Login <br /> My Account
                   </p>
                 </Link>
               </div>
               <div>
                 <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                   <img src={Cart} alt='cart' />
                   <div className=' d-flex flex-column gap-10'>
                     <span className='badge bg-white text-dark'>0</span>
                     <p className='mb-0'>$ 500</p>
                   </div>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
     </header>

     <header className='header-bottom '>
      <div className='container-xl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-32'>
            <div>
            <div className="dropdown">

                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15  d-flex align-items-center" 
                 type="button" id="dropdownMenuButton1" 
                 data-bs-toggle="dropdown" 
                 aria-expanded="false">
                <img src='img/menu.svg' alt='img'/>
                <span className='me-5 d-inline-block'>Shop categories</span>
                </button>

               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                  <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                  <li><Link className="dropdown-item  text-white" to="">Something else here</Link></li>
               </ul>
          </div>
            </div>
             <div className='menu-links'>
              <div className='d-flex align-items-center gap-15'>
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/blogs'>Blogs</NavLink>
               <NavLink to='/product'>Our Store</NavLink>
               <NavLink to='/contact'>Contact</NavLink>
               {/* <NavLink to='/compare-product'>CompareProduct</NavLink> */}
              </div>   
            </div>
            </div>
          </div>
        </div>
      </div>
     </header>


    </>
   )
 };

export default Header
