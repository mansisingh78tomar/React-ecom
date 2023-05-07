import React from 'react';
import Meta  from '../components/Meta';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
 
const Forgotpassword = () => {
  return (
    <>
      <Meta title={'Forgot Password'} />
      <Breadcrumb title="Forgot Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2 p-5">
          <div className="row">
            <div className="col-12">
                <div className="auth-card ">
                    <h3 className='text-center mb-3'>Reset Your Password</h3>
                    <p className='text-center mt-2  mb-3'>
                      We will send you an email to reset your password
                    </p>
                    <form action="" className='d-flex flex-column gap-15'>
                        <div>
                            <input type="email" 
                              name='email' 
                              className="form-control" 
                              placeholder='Enter email'
                            />
                        </div>
                       
                        <div>
                            <div className="mt-3 d-flex align-items-center flex-column gap-15 justify-content-center">
                                <button className='btn border-0' type='submit'>Submit</button>
                                <Link to="/login">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
          </div>
          </Container>
    </>
  )
}

export default Forgotpassword
