import { X } from "lucide-react";

import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

import CartItem from "./CartItem";

function CartDrawer({
  isOpen,
  onClose
}) {
  const { cartItems } =
    useCart();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="drawer-overlay"
      onClick={onClose}
    >
      <div
        className="cart-drawer"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className="drawer-header">
          <h2>Your Bag</h2>

          <button onClick={onClose}>
            <X size={21} />
          </button>
        </div>

        <div className="drawer-content">
          {cartItems.length === 0 ? (
            <div className="empty-state">
              <h3>Your bag is empty</h3>

              <Link
                to="/shop"
                className="btn btn-primary"
                onClick={onClose}
              >
                Shop Now
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={`${item.id}-${item.size}-${item.color}`}
                item={item}
              />
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <Link
            to="/cart"
            className="btn btn-primary full-width"
            onClick={onClose}
          >
            View Cart
          </Link>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;