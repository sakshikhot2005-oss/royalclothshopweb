import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";

import {
  formatCurrency
} from "../../utils/helpers";

function CartSummary() {
  const {
    subtotal,
    shipping,
    total
  } = useCart();

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Subtotal</span>

        <strong>
          {formatCurrency(subtotal)}
        </strong>
      </div>

      <div className="summary-row">
        <span>Shipping</span>

        <strong>
          {shipping === 0
            ? "FREE"
            : formatCurrency(shipping)}
        </strong>
      </div>

      <div className="summary-total">
        <span>Total</span>

        <strong>
          {formatCurrency(total)}
        </strong>
      </div>

      <Link
        to="/checkout"
        className="btn btn-primary btn-large full-width"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default CartSummary;