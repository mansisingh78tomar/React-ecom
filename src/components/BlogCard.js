import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard() {
  return (
       <div className="blog-card">
        <div className="card-image">
            <img src="img/blog-1.jpg" className='img-fluid w-100' alt="blog" />
        </div>
        <div className="blog-content">
            <p className="date">1 Nov, 2023</p>
            <h5 className="title">
               Lorem ipsum dolor sit amet .
            </h5>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Quod id dolorum modi commodi <br /> iste .</p>
            <Link className="btn" to='/blog/:id'>Read More</Link>
        </div>
       </div>
   
  )
}

export default BlogCard
