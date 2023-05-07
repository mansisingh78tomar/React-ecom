import React from 'react';
import Meta  from '../components/Meta';
import Breadcrumb from '../components/Breadcrumb';
import Container from '../components/Container';

const Wishlist = () => {
  return (
    <>
      <Meta title={'Wishlist'} />
      <Breadcrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3 px-5">
                    <div className="wishlist-card position-relative">
                     <img src="img/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="wishlist-card-img">
                           <img src="img/watch.jpg"  alt='watch' className="img-fluid w-100" />
                        </div>
                        <div className="py-3 px-3">
                          <h5 className="title">
                            Battery-Powered Smart Wi-Fi and Bluetooth Speaker with Alexa Built-in - Lunar White (2-Pack)
                          </h5>
                          <h6 className="price">$ 100</h6>
                        </div>
                    </div>
                </div>

                <div className="col-3 px-5">
                    <div className="wishlist-card position-relative">
                     <img src="img/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="wishlist-card-img">
                           <img src="img/watch.jpg"  alt='watch' className="img-fluid w-100" />
                        </div>
                        <div className="py-3 px-3">
                          <h5 className="title">
                            Battery-Powered Smart Wi-Fi and Bluetooth Speaker with Alexa Built-in - Lunar White (2-Pack)
                          </h5>
                          <h6 className="price">$ 100</h6>
                        </div>
                    </div>
                </div>

                <div className="col-3 px-5">
                    <div className="wishlist-card position-relative">
                     <img src="img/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="wishlist-card-img">
                           <img src="img/watch.jpg"  alt='watch' className="img-fluid w-100" />
                        </div>
                        <div className="py-3 px-3">
                          <h5 className="title">
                            Battery-Powered Smart Wi-Fi and Bluetooth Speaker with Alexa Built-in - Lunar White (2-Pack)
                          </h5>
                          <h6 className="price">$ 100</h6>
                        </div>
                    </div>
                </div>
          </div>
      </Container>
    </>
  )
}

export default Wishlist
