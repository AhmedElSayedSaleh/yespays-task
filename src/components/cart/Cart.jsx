import React from "react";

function Cart({
  cartOffcanvas,
  cartOffcanvasLabel,
  cartProduct,
  cartQuantity,
  totalPrice,
}) {
  return (
    <div
      className="offcanvas offcanvas-end cart-offcanvas"
      tabIndex="-1"
      id={cartOffcanvas}
      aria-labelledby={cartOffcanvasLabel}
    >
      <div className="cart-offcanvas__header">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn-close cart-offcanvas__header__btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <h2 className="cart-offcanvas__header__title">My Cart</h2>
      </div>
      <div className="cart-offcanvas__body">
        <h4 className="cart-offcanvas__body__summary">Cart Summary</h4>
        {cartProduct == null ? (
          <div className="h3 text-center pt-5 fw-bold">Your Cart is empty</div>
        ) : (
          <>
            <div className="cart-offcanvas__body__list">
              <div className="d-flex cart-offcanvas__body__list__card">
                <div className="cart-offcanvas__body__list__card__img">
                  <img
                    src={cartProduct.images && cartProduct.images[0]}
                    alt=""
                  />
                </div>
                <div className="cart-offcanvas__body__list__card__content">
                  <h5 className="cart-offcanvas__body__list__card__content__title">
                    {cartProduct.title}
                  </h5>
                  <p className="cart-offcanvas__body__list__card__content__quantity">
                    Quantity: <span>{cartQuantity}</span>
                  </p>
                  <div className="d-flex justify-content-between align-items-center cart-offcanvas__body__list__card__content__price">
                    <p>
                      <span>{cartProduct.price.replace(".", ",")}</span> LE
                    </p>
                    <div>
                      <button className="cart-offcanvas__body__buttons__btn cart-offcanvas__body__buttons__btn--remove cart-offcanvas__body__buttons__btn--primary">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-offcanvas__body__total-price">
              <p>
                Total: {totalPrice.toFixed(3).toString().replace(".", ",")} LE
              </p>
            </div>
            <div className="cart-offcanvas__body__buttons">
              <div className="row">
                <div className="col-md-6">
                  <button className="cart-offcanvas__body__buttons__btn cart-offcanvas__body__buttons__btn--primary">
                    Review Cart
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="cart-offcanvas__body__buttons__btn cart-offcanvas__body__buttons__btn--secondary">
                    Complete Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
