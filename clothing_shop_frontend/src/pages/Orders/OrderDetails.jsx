import {
  ArrowLeft,
  CheckCircle,
  Package
} from "lucide-react";

import {
  Link,
  useParams
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import {
  getOrderById
} from "../../services/orderService";

import Loader
  from "../../components/common/Loader";

import {
  formatCurrency
} from "../../utils/helpers";

function OrderDetails() {
  const { id } =
    useParams();

  const [order, setOrder] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getOrderById(id);

        setOrder(data);
      } catch {
        const orders =
          JSON.parse(
            localStorage.getItem(
              "orders"
            ) || "[]"
          );

        const found =
          orders.find(
            (item) =>
              String(item.id) ===
              String(id)
          );

        setOrder(found);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  if (loading) {
    return <Loader fullScreen />;
  }

  if (!order) {
    return (
      <div className="empty-state page-container">
        <h2>
          Order Not Found
        </h2>

        <Link
          to="/orders"
          className="btn btn-primary"
        >
          Back to Orders
        </Link>
      </div>
    );
  }

  const items =
    order.items ||
    order.orderItems ||
    [];

  return (
    <div className="order-details-page page-container">
      <Link
        to="/orders"
        className="back-link"
      >
        <ArrowLeft size={18} />
        Back to Orders
      </Link>

      <div className="page-title">
        <p>ORDER DETAILS</p>

        <h1>
          Order #{order.id || id}
        </h1>
      </div>

      <div className="order-details-layout">
        <div className="order-main">
          <div className="order-detail-header">
            <div>
              <h2>
                Order #
                {order.id || id}
              </h2>

              <p>
                {order.createdAt
                  ? new Date(
                      order.createdAt
                    ).toLocaleDateString(
                      "en-IN"
                    )
                  : "Recently placed"}
              </p>
            </div>

            <span className="status-badge">
              {order.status ||
                "Confirmed"}
            </span>
          </div>

          <div className="order-items-list">
            {items.map(
              (item, index) => (
                <div
                  className="order-detail-item"
                  key={
                    item.id ||
                    index
                  }
                >
                  <img
                    src={
                      item.image ||
                      item.product?.image
                    }
                    alt={
                      item.name ||
                      item.product?.name ||
                      "Product"
                    }
                  />

                  <div>
                    <h3>
                      {item.name ||
                        item.product
                          ?.name ||
                        "Product"}
                    </h3>

                    <p>
                      Size:{" "}
                      {item.size ||
                        "M"}
                    </p>

                    <p>
                      Quantity:{" "}
                      {item.quantity ||
                        1}
                    </p>
                  </div>

                  <strong>
                    {formatCurrency(
                      Number(
                        item.price ||
                          item.product
                            ?.price ||
                          0
                      ) *
                        Number(
                          item.quantity ||
                            1
                        )
                    )}
                  </strong>
                </div>
              )
            )}
          </div>
        </div>

        <aside className="order-summary-card">
          <h2>
            Order Summary
          </h2>

          <div className="summary-row">
            <span>Subtotal</span>

            <strong>
              {formatCurrency(
                order.subtotal ||
                  0
              )}
            </strong>
          </div>

          <div className="summary-row">
            <span>Shipping</span>

            <strong>
              {formatCurrency(
                order.shipping ||
                  0
              )}
            </strong>
          </div>

          <div className="summary-total">
            <span>Total</span>

            <strong>
              {formatCurrency(
                order.total ||
                  order.totalAmount ||
                  0
              )}
            </strong>
          </div>

          <div className="payment-info">
            <CheckCircle
              size={20}
            />

            <div>
              <strong>
                Payment
              </strong>

              <p>
                {order.paymentMethod ||
                  "Cash on Delivery"}
              </p>
            </div>
          </div>

          <div className="shipping-info">
            <Package size={20} />

            <div>
              <strong>
                Delivery Address
              </strong>

              <p>
                {order.address ||
                  order.shippingAddress?.address ||
                  "Address not available"}
              </p>

              <p>
                {order.city ||
                  order.shippingAddress?.city ||
                  ""}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default OrderDetails;