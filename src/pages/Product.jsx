import React, { Suspense } from "react";

import ProductDetails from "../components/product-details/ProductDetails";
const ProductCarousel = React.lazy(() =>
  import("../components/product-carousel/ProductCarousel")
);

function Product({ product, quantityCount, decrease, increase, addToCart }) {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Suspense
              fallback={
                <div className="text-center text-bg-warning"> Loading... </div>
              }
            >
              <ProductCarousel product={product} />
            </Suspense>
          </div>
          <div className="col-md-6">
            <ProductDetails
              quantityCount={quantityCount}
              product={product}
              decrease={decrease}
              increase={increase}
              addToCart={addToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
