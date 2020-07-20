import React from "react";

const Product = ({ product }) => {
  const { title, price, image } = product;
  const cartBtnHandelar = () => {
    alert("Demo Product " + title);
  };
  return (
    <>
      <div className='col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3'>
        <div className='card text-center product-card'>
          <img
            src={image}
            alt=''
            className='fluid'
            style={{ width: "100%", height: "250px" }}
          />
          <div className='card-body text-center'>
            <h5 className='text-capitalize'>{title}</h5>
            <h6 className='text-yellow'>
              <strong>${price}</strong>
            </h6>
            <button
              type='button'
              onClick={cartBtnHandelar}
              className='btn btn-secondary text-capitalize'>
              add to cart
            </button>
          </div>
        </div>
      </div>
      {/* <section>
        <div className='col-10 col-md-6 col-lg-4 mx-auto my-3'>
          <div className='card'>
            <img src={image} alt='' className='img-fluid' />
            <div className='card-body text-center'>
              <h3>{title}</h3>
              <h5>${price}</h5>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Product;
