import React from 'react';
import {Link} from 'react-router-dom';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';

function Footer() {
  return (
    <>
      <footer className='py-4 p-5'>
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-32 align-items-center">
                <img src='img/newsletter.png' alt='newsletter'/>
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-6">
            <div className="input-group ">
            <input type="email" className="form-control py-1"
             placeholder="Write your email address..." 
             aria-label="Write your email address..."
             aria-describedby="basic-addon2" />
            <span className="input-group-text p-2"  id="basic-addon2">Subscribe</span>
           </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h4 className='text-white mb-3'>Contact Us</h4>
                <div>
                  <address className='text-white fs-6'>
                  Hno : 31/177-G Near Shamshabad Road, <br /> Prem Nagar, Agra <br />
                  PinCode : 282001
                  </address>
                  <a href='tel : +91 7983722527' className='mt-3 d-block mb-1 text-white'>
                    +91 7983722527
                  </a>
                  <a href='mailto : mansisingh78tomar@gmail.com' className='mt-2 d-block mb-0 text-white'>
                    mansisingh78tomar@gmail.com
                  </a>
                  <div className="social_icons d-flex align-items-center gap-32 mt-3">
                    <a href='https://github.com/mansisingh78tomar' className='text-white '>
                      <BsGithub className='fs-4 ' />
                    </a>
                    <a href='/' className='text-white' >
                    <BsLinkedin  className=' fs-4' />
                    </a>
                    <a href='/ "             ' className='text-white'>
                    <BsInstagram  className=' fs-4' />
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="col-3">
                <h4 className='text-white mb-2'>Information</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link to="privacy-policy" className="text-white py-1 mb-1">Privacy Policy</Link>
                  <Link to="shipping-policy" className="text-white py-1 mb-1">Shipping Policy</Link>
                  <Link to="refund-policy" className="text-white py-1 mb-1">Refund Policy</Link>
                  <Link className="text-white py-1 mb-1">Blogs</Link>
                  <Link to="term-conditions" className="text-white py-1 mb-1">Terms & Conditions</Link>
                </div>
              </div>
              <div className="col-3">
                <h4 className='text-white mb-2'>Account</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className="text-white py-1 mb-1">FQA</Link>
                  <Link className="text-white py-1 mb-1">About</Link>
                  <Link className="text-white py-1 mb-1">Contact</Link>
                </div>
              </div>
              <div className="col-2">
                <h4 className='text-white mb-2'>Quick Links</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className="text-white py-1 mb-1">Laptops</Link>
                  <Link className="text-white py-1 mb-1">Watch</Link>
                  <Link className="text-white py-1 mb-1">Headphones</Link>
                  <Link className="text-white py-1   mb-1">Tablets</Link>
                </div>
              </div>
            </div>
          </div>
      </footer>
      <footer className='py-2'>
        <div className='container-xl'>
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered by Developer's Corner </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
