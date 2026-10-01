import {
  Link
} from "react-router-dom";

import {
  ShoppingBag
} from "lucide-react";

import {
  useCart
} from "../../hooks/useCart";

import CartItem
  from "../../components/cart/CartItem";

import CartSummary
  from "../../components/cart/CartSummary";

function Cart() {
  const { cartItems } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart page-container">
        <ShoppingBag size={55} />

        <h1>
          Your Shopping Bag is Empty
        </h1>

        <p>
          Add some products to
          continue shopping.
        </p>

        <Link
          to="/shop"
          className="btn btn-primary btn-large"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page page-container">
      <div className="page-title">
        <p>SHOPPING BAG</p>
        <h1>Your Cart</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map(
            (item) => (
              <CartItem
                key={`${item.id}-${item.size}-${item.color}`}
                item={item}
              />
            )
          )}
        </div>

        <CartSummary />
      </div>
    </div>
  );
}

export default Cart;