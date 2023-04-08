import React from "react";

function Breadcrumb() {
  return (
    <div className="border-bottom border-1">
      <div className="container">
        <div className="row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#">Men</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Clothing</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Tops</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Adidas</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Adidas Blue T-Shirt
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
