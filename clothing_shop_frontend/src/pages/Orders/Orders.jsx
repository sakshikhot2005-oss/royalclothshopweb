import {
  Link
} from "react-router-dom";

import {
  Package,
  ChevronRight
} from "lucide-react";

import {
  useEffect,
  useState
} from "react";

import {
  getOrders
} from "../../services/orderService";

import {
  formatCurrency
} from "../../utils/helpers";

function Orders() {
  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getOrders();

        setOrders(
          Array.isArray(data)
            ? data
            : data.orders || []
        );
      } catch {
        const saved =
          JSON.parse(
            localStorage.getItem(
              "orders"
            ) || "[]"
          );

        setOrders(saved);
      }
    }

    load();
  }, []);

  return (
    <div className="orders-page page-container">
      <div className="page-title">
        <p>ACCOUNT</p>

        <h1>My Orders</h1>
      </div>

      {!orders.length ? (
        <div className="empty-state">
          <Package size={50} />

          <h2>No Orders Yet</h2>

          <p>
            Your placed orders will
            appear here.
          </p>

          <Link
            to="/shop"
            className="btn btn-primary"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map(
            (order, index) => (
              <Link
                to={`/orders/${
                  order.id ||
                  index
                }`}
                className="order-card"
                key={
                  order.id ||
                  index
                }
              >
                <div className="order-icon">
                  <Package size={24} />
                </div>

                <div className="order-info">
                  <h3>
                    Order #
                    {order.id ||
                      index + 1}
                  </h3>

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

                <div className="order-status">
                  {order.status ||
                    "Confirmed"}
                </div>

                <strong>
                  {formatCurrency(
                    order.total ||
                      order.totalAmount ||
                      0
                  )}
                </strong>

                <ChevronRight
                  size={20}
                />
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Orders;