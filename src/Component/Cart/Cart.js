import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Product from './Product';

export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity + change));
  };

  return (
    <>
      <section className="h-100 h-custom" >
        <div className="container-fluid py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                          <h6 className="mb-0 text-muted">3 items</h6>
                        </div>
                        <hr className="my-4" />

                        {/* -------------------------... Other items in the cart */}

                      <Product/>

                        {/*----------------- ... Repeat the above block for other items in the cart */}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">items 3</h5>
                          <h5>€ 132.00</h5>
                        </div>

                        <hr />

                        <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <div className="form-outline">
                            <input className='p-2' type="text" id="form3Examplea2" placeholder='Enter Your Code' style={{border:"none" ,  backgroundColor:"whitesmoke"}} />

                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>€ 137.00</h5>
                        </div>

                        <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
