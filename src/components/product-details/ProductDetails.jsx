import React from "react";
import Icon from "../icon/Icon";
import ProductBrandImg from "/src/assets/images/product/product-adidas.png";
import ColorImg1 from "/src/assets/images/product/color-img1.png";
import ColorImg2 from "/src/assets/images/product/color-img2.png";

function ProductDetails({
  product,
  quantityCount,
  decrease,
  increase,
  addToCart,
}) {
  const { title, price } = product;

  return (
    <div className="product-details">
      <img src={ProductBrandImg} alt="" />
      <h2 className="product-details__title">{title}</h2>
      <p className="product-details__gender">Men</p>
      <div className="d-flex product-details__rate">
        <div>
          <Icon
            icon="full-star"
            size={"1.6rem"}
            className="product-details__rate__star"
          />
          <Icon
            icon="full-star"
            size={"1.6rem"}
            className="product-details__rate__star"
          />
          <Icon
            icon="full-star"
            size={"1.6rem"}
            className="product-details__rate__star"
          />
          <Icon
            icon="full-star"
            size={"1.6rem"}
            className="product-details__rate__star"
          />
          <Icon
            icon="star"
            size={"1.6rem"}
            className="product-details__rate__star"
          />
        </div>
        <p className="product-details__rate__number">4.9 of 5</p>
        <p className="product-details__rate__counts">22 Rates</p>
      </div>
      <div className="d-flex product-details__price">
        <h3 className="product-details__price__current">
          {price.replace(".", ",")} <span>LE</span>
        </h3>
        <p className="product-details__price__before">
          <span>9,999</span> LE
        </p>
        <p className="product-details__price__off">30% Off</p>
      </div>
      <div className="product-details__size border-top">
        <h2>Size</h2>
        <ul className="d-flex ps-0">
          <li>
            <label htmlFor="productSizeRadio1">
              <input
                type="radio"
                name="product-size"
                id="productSizeRadio1"
                value="Small"
                className="product-details__size__radio"
              />
              <div className="product-details__size__name">
                <p>Small</p>
              </div>
            </label>
          </li>
          <li>
            <label htmlFor="productSizeRadio2">
              <input
                type="radio"
                name="product-size"
                id="productSizeRadio2"
                value="Medium"
                className="product-details__size__radio"
              />
              <div className="product-details__size__name">
                <p>Medium</p>
              </div>
            </label>
          </li>
          <li>
            <label htmlFor="productSizeRadio3">
              <input
                type="radio"
                name="product-size"
                id="productSizeRadio3"
                defaultChecked
                value="Large"
                className="product-details__size__radio"
              />
              <div className="product-details__size__name">
                <p>Large</p>
              </div>
            </label>
          </li>
          <li>
            <label htmlFor="productSizeRadio4">
              <input
                type="radio"
                name="product-size"
                id="productSizeRadio4"
                value="XLarge"
                className="product-details__size__radio"
              />
              <div className="product-details__size__name">
                <p>X Large</p>
              </div>
            </label>
          </li>
          <li>
            <label htmlFor="productSizeRadio5">
              <input
                type="radio"
                name="product-size"
                id="productSizeRadio5"
                value="XXLarge"
                className="product-details__size__radio"
              />
              <div className="product-details__size__name">
                <p>XX Large</p>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div className="product-details__color border-top">
        <h2>Color</h2>
        <ul className="d-flex ps-0">
          <li>
            <label htmlFor="productColorRadio1">
              <input
                type="radio"
                name="product-color"
                id="productColorRadio1"
                defaultChecked
                value={"black"}
                className={"product-details__color__radio"}
              />
              <img
                className={
                  ColorImg1 === "" ? "" : "product-details__color__img"
                }
                src={ColorImg1}
                alt=""
              />
            </label>
          </li>
          <li>
            <label htmlFor="productColorRadio2">
              <input
                type="radio"
                name="product-color"
                id="productColorRadio2"
                value={"red"}
                className={"product-details__color__radio"}
              />
              <img
                className={
                  ColorImg2 === "" ? "" : "product-details__color__img"
                }
                src={ColorImg2}
                alt=""
              />
            </label>
          </li>
        </ul>
      </div>
      <div className="product-details__quantity border-top">
        <h2>Quantity</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-between align-items-center product-details__quantity__content">
              <div
                className="product-details__quantity__content__decrease"
                onClick={decrease}
              >
                <Icon icon="decrease" size={"1.6rem"} />
              </div>
              <span className="product-details__quantity__content__count">
                {quantityCount}
              </span>
              <div
                className="product-details__quantity__content__increase"
                onClick={increase}
              >
                <Icon icon="increase" size={"1.6rem"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-details__buttons">
        <div className="row">
          <div className="col-md-6">
            <button
              className="product-details__buttons__btn product-details__buttons__btn--secondary"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          </div>
          <div className="col-md-6">
            <button className="product-details__buttons__btn product-details__buttons__btn--primary">
              Pickup From Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
