import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Meta  from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';

function OurStore() {
    const [grid, setGrid] = useState(4);
    
  return (
   <>
    <Meta title={"Our Store"} />
    <Breadcrumb title="Our Store" />
    <Container class1="store-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className='filter-card mb-3'>
                        <h3 className="filter-title">
                            Shop By Categories
                        </h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Watch</li>
                                <li>Laptop</li>
                                <li>TV</li>
                                <li>Camera</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className="filter-title">
                           Filter By
                        </h3>
                     <div>
                        <h5 className="sub-title">Availablity</h5>
                       <div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input"  />
                            <label className="form-check-label">
                                In Stock(1)
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">
                                Out of Stock(0)
                            </label>
                        </div>
                       </div>
                        <h5 className="sub-title">Price</h5>
                         <div className='d-flex align-items-center gap-10'>
                         <div className="form-floating ">
                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                            <label htmlfor="floatingInput">From</label>
                         </div>
                         <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                            <label htmlfor="floatingInput1">To</label>
                         </div>
                         </div>
                        <h5 className="sub-title">Colors</h5>
                            <div>
                               <Color />
                            </div>
                        <h5 className="sub-title">Size</h5>
                        <div>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id='color-1'   />
                            <label className="form-check-label" htmlFor='color-1'>
                               S (2)
                            </label>
                          </div>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id='color-2'   />
                            <label className="form-check-label" htmlFor='color-2'>
                               M (2)
                            </label>
                          </div>
                        </div>
                            

                     </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className="filter-title">
                          Product Tags
                        </h3>
                        <div>
                            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary  rounded-3 py-2 px-3">
                                    Headphones
                                </span>
                                <span className="badge bg-light text-secondary  rounded-3 py-2 px-3">
                                    Mobile
                                </span>
                                <span className="badge bg-light text-secondary  rounded-3 py-2 px-3">
                                    Speaker
                                </span>
                                <span className="badge bg-light text-secondary  rounded-3 py-2 px-3">
                                    Vivo
                                </span>
                                <span className="badge bg-light text-secondary  rounded-3 py-2 px-3">
                                    Wire
                                </span>
                                <span className="badge bg-light text-secondary  rounded-3 py-2 px-3">
                                    Watch
                                </span>
                                <span className="badge bg-light text-secondary  rounded-3 py-2 px-3">
                                    Laptop
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className="filter-title">
                          Random Product
                        </h3>
                        <div>
                            <div className="random-product mb-3 d-flex">
                                <div className="w-50">
                                  <img src="img/watch.jpg" className='img-fluid'  alt="watch" />
                                </div>
                                <div className="w-50">
                                   <h5>Kids Headphones bulk 10 pack multi colored for students</h5>
                                   <ReactStars
                                     count={5}
                                     size={24}
                                     activeColor="#ffd700"
                                     value={3} 
                                     edit={false}
                                    />
                                    <b>&200</b>
                                </div>
                            </div>
                            <div className="random-product d-flex">
                                <div className="w-50">
                                  <img src="img/watch.jpg" className='img-fluid'  alt="watch" />
                                </div>
                                <div className="w-50">
                                   <h5>Kids Headphones bulk 10 pack multi colored for students</h5>
                                   <ReactStars
                                     count={5}
                                     size={24}
                                     activeColor="#ffd700"
                                     value={3} 
                                     edit={false}
                                    />
                                    <b>&200</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="filter-sort-grid mb-4">
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-10">
                            <p className='mb-0 d-block'>Sort By:</p>
                            <select name="" id="form-control form-selected">
                                <option value="manual">Featured</option>
                                <option value="best-selling" selected="selected">
                                    Best Selling
                                </option>
                                <option value="title-ascending" >
                                   Alphabetically, A-Z
                                </option>
                                <option value="title-descending" >
                                   Alphabetically, Z-A
                                </option>
                                <option value="price-descending" >
                                 Price, high-low
                                </option>
                                <option value="price-ascending" >
                                 Price, low-high
                                </option>
                                <option value="created-ascending" >
                                 Date, old-new
                                </option>
                                <option value="created-descending" >
                                 Date, new-old
                                </option>
                            </select>
                        </div>
                        <div className='d-flex align-items-center gap-10'>
                           <p className="total-products">20 Products</p>
                           <div className="d-flex align-items-center gap-10 grid">
                           <img onClick={() => {setGrid(3)}} src="img/gr4.svg" className='d-block img-fluid' alt="grid" />
                            <img onClick={() => {setGrid(4)}} src="img/gr3.svg" className='d-block img-fluid' alt="grid" />
                            <img onClick={() => {setGrid(6)}} src="img/gr2.svg" className='d-block img-fluid' alt="grid" />
                            <img onClick={() => {setGrid(12)}} src="img/gr.svg" className='d-block img-fluid' alt="grid" />
                           </div>
                        </div>
                        </div>
                    </div>
                    <div className='products-list pb-5'>
                         <div className="d-flex gap-10  flex-wrap">
                         <ProductCard grid={grid} />
                         </div>
                    </div>
                </div>
            </div>
    </Container>
   </>
  )
}

export default OurStore
