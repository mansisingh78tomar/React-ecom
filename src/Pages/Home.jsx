import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { services } from '../utils/Data';
 import Container  from '../components/Container';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
    
    const Home = () => {
      return (
       <>
       <Container class1="home-wrapper-1 py-5 ">
       <div className="row">
              <div className="col-6">  
                <div className="main-banner position-relative ">
                  <img src="img/main-banner.jpg"
                     className='img-fluid rounded-3'
                     alt="main banner" 
                  />
                  <div className="main-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROPS.</h4>
                    <h5>Best offer 's</h5>
                    <p>From $999.00 or $41.62/mo</p>
                    <Link className='btn'>BUY NOW</Link>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src="img/dgg.avif"
                     className='img-fluid rounded-3'
                     alt="main banner" 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Best offer 's</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="img/lapp4.avif"
                     className='img-fluid rounded-3'
                     alt="main banner" 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Best offer 's</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="img/ee.avif"
                     className='img-fluid rounded-3'
                     alt="main banner" 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Best offer 's</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="img/www.avif"
                     className='img-fluid rounded-3'
                     alt="main banner" 
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Best offer 's</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
                
                </div>
              </div>
            </div>
       </Container>
        
        <Container class1="home-wrapper-2 py-5 ">
        <div className="row">
              <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-2" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
              </div>
            </div>
        </Container>

        <Container class1="home-wrapper-3 py-5  ">
        <div className="row">
              <div className="col-12">
                <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                 <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/camera.jpg" alt="camera" />
                 </div>

                 <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Smart Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/headphone.jpg" alt="headphone" />
                 </div>

                 <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/acc.jpg" alt="Accessories" />
                 </div>

                 <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/tv.jpg" alt="tv" />
                 </div>

                 <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/camera.jpg" alt="camera" />
                 </div>

                 <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/camera.jpg" alt="camera" />
                 </div>
             
                 <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/camera.jpg" alt="camera" />
                 </div>

                 <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Portable Speaker</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="img/speaker.jpg" alt="speaker" />
                 </div> 
                 </div>
                 
              </div>
            </div>
        </Container>
 
         <Container class1="featured-wrapper  home-wrapper-2  py-5 ">
         <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
               Featured Collection
              </h3>
            </div>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
         </Container>

         <Container class1="famous-wrapper  home-wrapper-2  py-5">
         <div className="row">
              <div className="col-3 ">
                <div className="famous-card position-relative">
                  <img src="img/famous-3.jpg" className='img-fluid' alt="famous" />
                  <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Serious 7</h6>
                  {/* <p> From $399 or &16.62/mo. for 24 mo.</p> */}
                  </div>
                </div>
              </div>

              <div className="col-3 ">
                <div className="famous-card position-relative">
                  <img src="img/famous2.jpeg" className='img-fluid' alt="famous" />
                  <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Earbuds</h5>
                  <h6 className='text-dark'>Wireless Earbuds Bluetooth</h6>
                  {/* <p> From $399 or &16.62/mo. for 24 mo.</p> */}
                  </div>
                </div>
              </div>

              <div className="col-3 ">
                <div className="famous-card position-relative">
                <img src="img/famous2.jpeg" className='img-fluid' alt="famous" />
                   <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Earbuds</h5>
                  <h6 className='text-dark'>Wireless Earbuds Bluetooth</h6>
                  {/* <p> From $399 or &16.62/mo. for 24 mo.</p> */}
                  </div>
                </div>
              </div>

              <div className="col-3 ">
                <div className="famous-card position-relative">
                <img src="img/famous2.jpeg" className='img-fluid' alt="famous" />
                   <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Earbuds</h5>
                  <h6 className='text-dark'>Wireless Earbuds Bluetooth</h6>
                  {/* <p> From $399 or &16.62/mo. for 24 mo.</p> */}
                  </div>
                </div>
              </div>

            </div>
         </Container>


        
        {/* <Container class1="special-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
         </Container> */}

        <Container class1='popular-wrapper  py-5 home-wrapper-2 '>
            <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
              Our Popular Products
              </h3>
            </div>
             
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
        </Container>

        <Container class1='marque-wrapper py-5 '>
            <div className="row">
              <div className="col-12">
                <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src="img/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="img/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="img/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="img/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="img/brand-07.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="img/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="img/brand-08.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="img/brand-06.png" alt="brand" />
                  </div>
                  
                </Marquee>
                </div>
              </div>
            </div>
        </Container>

        <Container class1='blog-wrapper py-5 home-wrapper-2'>
            <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our Latest Blogs
              </h3>
            </div>
              
            </div>
            <div className="row">
              <div className="col-3">
              <BlogCard />
              </div>
              <div className="col-3">
              <BlogCard />
              </div>
              <div className="col-3">
              <BlogCard />
              </div>
              <div className="col-3">
              <BlogCard />
              </div>
            </div>
        </Container>
       </>
      )
    };
    
    export default Home;
    