import React from 'react';
import Meta  from '../components/Meta';
import Breadcrumb from '../components/Breadcrumb';
import {AiOutlineHome,AiOutlineGithub,AiOutlineLinkedin,AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={'Contact Us'} />
      <Breadcrumb title="Contact Us" />
       <Container calss1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12 w-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.183692745698!2d78.03286311448875!3d27.150510056349656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747147177f4b99%3A0x8569e07f07074922!2sGaurav%20Sweets%20House!5e0!3m2!1sen!2sin!4v1680628531811!5m2!1sen!2sin" width="100%" height="450" className="border:0 w-100;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                 <div className='p-3'>
                  <h3 className='contact-title mb-4'>Contact Us</h3>
                    <form form action="" className='d-flex flex-column gap-15 '>
                    <div>
                      <input 
                       type="text" 
                       className='form-control'
                       placeholder='Name'
                      />
                    </div> <div>
                    <input 
                       type="email" 
                       className='form-control'
                       placeholder='Email'
                      />
                    </div>
                    <div>
                      <input type="tel" 
                       className='form-control'
                       placeholder='Mobile Number' 
                      />
                    </div>
                    <div>
                      <textarea 
                       className='w-100 form-control' 
                       id="" 
                       cols="30" 
                       rows="4"
                       placeholder='Comments'
                       />
                    </div>
                      <div>
                        <button className='btn border-0'>Submit</button>
                      </div>
                    </form>
                 </div>
                 <div className='m-3'>
                 <h3 className='contact-title mb-4'>
                    Contact
                  </h3>
                 <div>
                 <ul className='ps-0'>
                 
                  <li className='mb-3 d-flex align-items-center gap-15'>
                    <AiOutlineHome className='fs-5'  />
                    <address className='mb-0'>Hno: 31/177-G, Near by Rajpur chungi, AGRA</address>
                  </li>
                  <li className='mb-3 d-flex align-items-center gap-15'>
                    <AiOutlineGithub className='fs-5'/>
                    <a href="github:https://github.com/mansisingh78tomar">https://github.com/mansisingh78tomar</a>
                  </li>
                  <li className='mb-3 d-flex align-items-center gap-15'>
                   <AiOutlineLinkedin className='fs-5' />
                   <a href="linkedin:https://www.linkedin.com/in/mansi-singh-tomar-900281239/">
                    https://www.linkedin.com/in/mansi-singh-tomar-900281239/
                   </a>
                   
                  </li>
                  <li className='mb-3 d-flex align-items-center gap-15'>
                   <BiPhoneCall className='fs-5'/>
                   <a href="tel:+91 7983722527">+91 7983722527</a>
                  </li>
                  <li className='mb-3 d-flex align-items-center gap-15'>
                   <AiOutlineMail className='fs-5'/>
                   <a href="mail:mansisingh78tomar@gmail.com">mansisingh78tomar@gmail.com</a>
                  </li>
                 </ul>
                 </div>
              </div>
              </div>  
            </div>
          </div>
        </Container>
     
    </>
  )
}

export default Contact
