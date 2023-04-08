import React from "react";

function BottomNavbar() {
  return (
    <div className="bottom-navbar">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="d-flex justify-content-between align-items-center bottom-navbar__list">
              <li>
                <a href="#" className="bottom-navbar__list__link">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="bottom-navbar__list__link">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="bottom-navbar__list__link">
                  Unisex
                </a>
              </li>
              <li>
                <a href="#" className="bottom-navbar__list__link">
                  Kids
                </a>
              </li>
              <li>
                <a href="#" className="bottom-navbar__list__link">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="bottom-navbar__list__link">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="bottom-navbar__list__link">
                  Offers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
