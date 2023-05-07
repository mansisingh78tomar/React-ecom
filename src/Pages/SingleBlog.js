import React from 'react';
import Meta  from '../components/Meta';
import Breadcrumb from '../components/Breadcrumb';
import {Link} from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import Container from '../components/Container';


const SingleBlog = () => {
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <Breadcrumb title="Dynamic Blog Name" />
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
            <div className="row">
                <div className="col-12">
                  <div className="single-blog-card">
                   <Link to="/blogs" className='d-flex align-items-center gap-10'>
                   <HiOutlineArrowLeft className='fs-4' />Go back to Blogs</Link>
                  <h3 className="title">
                    A Beautiful Sunday Morning Renaissance
                  </h3>
                  <img src="img/blog-1.jpg" className='img-fluid w-100 my- 4' alt="blog" />
                  <p>Lorem ipsum dolor sit  amet, consectetur adipisicing elit. Architecto deserunt blanditiis deleniti corporis impedit? Eius provident rerum veniam esse optio eos, magni, impedit eveniet veritatis explicabo nobis itaque, consectetur odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in quaerat quas minus laboriosam 
                   veritatis doloribus voluptate fugit eaque eius! Inventore molestias reprehenderit voluptatum ut numquam? Maxime iste cupiditate dicta!</p>
                  </div>
                </div>
            </div>
      </Container>
    </>
  )
}

export default SingleBlog

