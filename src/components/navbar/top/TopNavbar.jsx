import React from "react";
import NavLogo from "/images/Nav-Logo.png";
import Icon from "../../icon/Icon";

function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div>
              <Icon icon="nav-btn" size={"1.8rem"} role="button" />
              <img
                src={NavLogo}
                alt="yeshtery"
                className="top-navbar__logo"
                role="button"
              />
            </div>
            <div className="d-flex align-items-center top-navbar__offers">
              <Icon icon="nav-prev" size={"1.2rem"} role="button" />
              <div>
                <p>
                  Valentine’s Day Offers! Buy Two Get One Free{" "}
                  <a href="#">Shop Now</a>
                </p>
              </div>
              <Icon icon="nav-next" size={"1.2rem"} role="button" />
            </div>
            <ul className="d-flex align-items-center justify-content-between top-navbar__list">
              <li>
                <a href="tel:+1111111111">
                  <Icon icon="phone" size={"2rem"} />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon icon="nav-cart" size={"2rem"} />
                  <span>Track Order</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon icon="find" size={"2rem"} />
                  <span>Find A Store</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
