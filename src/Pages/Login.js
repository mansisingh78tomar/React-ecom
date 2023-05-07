import React from 'react';
import Meta  from '../components/Meta';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Login = () => {
  return (
    <>
       <Meta title={'Login'} />
      <Breadcrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <div className="auth-card ">
                    <h3 className='text-center mb-3'>Login</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                     <CustomInput name='email' className="form-control" placeholder='Enter email' />
                     <CustomInput name='password'  className="form-control"    placeholder='Enter password' />
                        <div>
                            <Link to="/forgot-password">Forgot Password?</Link>
                            <div className="mt-3 d-flex align-items-center gap-15 justify-content-center">
                                <button className='btn border-0' type='submit'>Login</button>
                                <Link to='/signup' className="btn signup border-0">Sign Up</Link>
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

export default Login
