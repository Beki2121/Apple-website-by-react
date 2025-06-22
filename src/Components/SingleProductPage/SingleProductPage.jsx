import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Four04 from '../MultiPages/Four04/Four04';

function SingleProductPage() {

  const [product, setProduct] = useState([]);
  const {productParam} = useParams()
  console.log(useParams())

  useEffect(() => {
    fetch("http://localhost:2121/iphones")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        const singleProduct = productList.filter(
          (product) => product.product_url === productParam
        );

        setProduct(singleProduct);
      })
      .catch(() => console.log("Error:unable to fetch!!!"));
  }, [productParam]);

  // console.log(product)

  if(product.length){
    return (
      <div>
        <section className='internal-page-wrapper'>
          <div className='container'>
      
            {product?.map((product) => {
              return (
                <div key={product.product_id}>
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5 pt-5">
                      <div className="title-wrapper font-weight-bold">
                        {product.product_name}
                      </div>
                      <div className="brief-description">
                        {product.product_brief_description}
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100 m-5">
                    <div className=" col-sm-12 col-md-6 my-auto">
                      <div className="starting-price">
                        {`starting at ${product.starting_price}`}
                      </div>
                      <div className="monthly-price">{product.price_range}</div>
                      <div className="product-details">
                        {product.product_description}
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="product-image">
                        <img src={product.product_image} alt="product" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    )
  }else{
    return <Four04/>
  }
}

export default SingleProductPage