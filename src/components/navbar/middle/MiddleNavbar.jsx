import React from "react";
import Adidas from "/images/adidas.png";
import Icon from "../../icon/Icon";

function MiddleNavbar({ cartQuantity }) {
  return (
    <div className="middle-navbar">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center">
            <div className="middle-navbar__input">
              <Icon
                icon="search"
                size={"2.4rem"}
                className="middle-navbar__input__icon"
              />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="col-md-4 text-center py-3">
            <img src={Adidas} alt="" />
          </div>
          <div className="col-md-4">
            <ul className="d-flex align-items-center justify-content-end h-100 mb-0 middle-navbar__list">
              <li className="d-flex">
                <div className="middle-navbar__list__cart">
                  <span className="middle-navbar__list__cart__badge">
                    {cartQuantity}
                  </span>
                  <Icon icon="cart" size={"2.4rem"} />
                </div>
                <a
                  data-bs-toggle="offcanvas"
                  href="#cartOffcanvas"
                  role="button"
                  aria-controls="cartOffcanvas"
                >
                  Cart
                </a>
              </li>
              <li>
                <Icon icon="heart" size={"2.4rem"} />
                <a href="#">Wishlist</a>
              </li>
              <li>
                <Icon icon="user" size={"2.4rem"} />
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleNavbar;
