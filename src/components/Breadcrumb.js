import React from 'react';
import {Link} from 'react-router-dom';

function Breadcrumb(props) {
    const {title} = props;
  return (
    <div className='breadcrumb mb-0 py-2'>
      <div className="container-xl">
        <div className="row">
            <div className="col-12 mb-0">
                <p className='text-center'>
                    <Link to="/" className="text-dark">Home &nbsp;</Link> / {title}
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb;
