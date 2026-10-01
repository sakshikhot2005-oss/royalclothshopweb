import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  CheckCircle
} from "lucide-react";

import {
  useCart
} from "../../hooks/useCart";

import {
  useAuth
} from "../../hooks/useAuth";

import {
  createOrder
} from "../../services/orderService";

import {
  formatCurrency
} from "../../utils/helpers";

function Checkout() {
  const navigate =
    useNavigate();

  const {
    cartItems,
    subtotal,
    shipping,
    total,
    clearCart
  } = useCart();

  const { user } =
    useAuth();

  const [form, setForm] =
    useState({
      name: user?.name || "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      paymentMethod:
        "Cash on Delivery"
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      if (!cartItems.length) {
        navigate("/cart");
        return;
      }

      try {
        setLoading(true);

        const orderData = {
          ...form,
          items: cartItems,
          subtotal,
          shipping,
          total,
          userId: user?.id
        };

        const order =
          await createOrder(
            orderData
          );

        clearCart();

        navigate(
          `/orders/${
            order?.id ||
            Date.now()
          }`
        );
      } catch {
        const demoOrder = {
          id: Date.now(),
          ...form,
          items: cartItems,
          subtotal,
          shipping,
          total,
          status: "Confirmed",
          createdAt:
            new Date().toISOString()
        };

        const existing =
          JSON.parse(
            localStorage.getItem(
              "orders"
            ) || "[]"
          );

        localStorage.setItem(
          "orders",
          JSON.stringify([
            demoOrder,
            ...existing
          ])
        );

        clearCart();

        navigate(
          `/orders/${demoOrder.id}`
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="checkout-page page-container">
      <div className="page-title">
        <p>CHECKOUT</p>
        <h1>Complete Your Order</h1>
      </div>

      <form
        className="checkout-layout"
        onSubmit={handleSubmit}
      >
        <div className="checkout-form">
          <section className="checkout-card">
            <h2>
              Delivery Information
            </h2>

            <div className="form-grid">
              <div className="form-group">
                <label>
                  Full Name
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={
                    handleChange
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Phone Number
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={
                    handleChange
                  }
                  required
                />
              </div>

              <div className="form-group full">
                <label>
                  Address
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={
                    handleChange
                  }
                  rows="3"
                  required
                />
              </div>

              <div className="form-group">
                <label>City</label>

                <input
                  name="city"
                  value={form.city}
                  onChange={
                    handleChange
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label>State</label>

                <input
                  name="state"
                  value={form.state}
                  onChange={
                    handleChange
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Pincode
                </label>

                <input
                  name="pincode"
                  value={form.pincode}
                  onChange={
                    handleChange
                  }
                  required
                />
              </div>
            </div>
          </section>

          <section className="checkout-card">
            <h2>
              Payment Method
            </h2>

            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={
                  form.paymentMethod ===
                  "Cash on Delivery"
                }
                onChange={
                  handleChange
                }
              />

              <span>
                Cash on Delivery
              </span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="UPI"
                checked={
                  form.paymentMethod ===
                  "UPI"
                }
                onChange={
                  handleChange
                }
              />

              <span>UPI</span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                checked={
                  form.paymentMethod ===
                  "Credit Card"
                }
                onChange={
                  handleChange
                }
              />

              <span>
                Credit Card
              </span>
            </label>
          </section>
        </div>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          {cartItems.map(
            (item) => (
              <div
                className="checkout-item"
                key={`${item.id}-${item.size}-${item.color}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h4>
                    {item.name}
                  </h4>

                  <p>
                    Qty:{" "}
                    {item.quantity}
                  </p>
                </div>

                <strong>
                  {formatCurrency(
                    item.price *
                      item.quantity
                  )}
                </strong>
              </div>
            )
          )}

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>
              {formatCurrency(
                subtotal
              )}
            </strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <strong>
              {shipping === 0
                ? "FREE"
                : formatCurrency(
                    shipping
                  )}
            </strong>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>
              {formatCurrency(total)}
            </strong>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-large full-width"
            disabled={loading}
          >
            <CheckCircle size={18} />

            {loading
              ? "Placing Order..."
              : "Place Order"}
          </button>
        </aside>
      </form>
    </div>
  );
}

export default Checkout;