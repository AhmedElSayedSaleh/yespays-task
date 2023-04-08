import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Product from "./pages/Product";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
const Cart = React.lazy(() => import("./components/cart/Cart"));

import ProductImg1 from "/src/assets/images/product/1.jpg";
import ProductImg2 from "/src/assets/images/product/2.jpg";
import ProductImg3 from "/src/assets/images/product/3.jpg";
import ProductImg4 from "/src/assets/images/product/4.jpg";
import ProductImg5 from "/src/assets/images/product/5.jpg";

const product = {
  title:
    "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  images: [ProductImg1, ProductImg2, ProductImg3, ProductImg4, ProductImg5],
  price: "9.999",
};

function App() {
  const [cartProduct, setCartProduct] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [quantityCount, setQuantityCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleDecrease = () => {
    if (quantityCount > 1) {
      setQuantityCount(quantityCount - 1);
    }
  };

  const handleIncrease = () => {
    setQuantityCount(quantityCount + 1);
  };

  const handleAddToCart = () => {
    setCartQuantity(cartQuantity + quantityCount);
    setTotalPrice(totalPrice + product.price * quantityCount);
    setCartProduct(product);
  };

  return (
    <div className="App">
      <Cart
        cartOffcanvas={"cartOffcanvas"}
        cartOffcanvasLabel={"cartOffcanvasLabel"}
        cartProduct={cartProduct}
        cartQuantity={cartQuantity}
        totalPrice={totalPrice}
      />
      <Navbar cartQuantity={cartQuantity} />
      <Breadcrumb />
      <Product
        product={product}
        quantityCount={quantityCount}
        decrease={handleDecrease}
        increase={handleIncrease}
        addToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
