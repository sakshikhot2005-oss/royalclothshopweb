import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetailsPage from "../pages/Product/ProductDetailsPage";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import Wishlist from "../pages/Wishlist/Wishlist";

import Orders from "../pages/Orders/Orders";
import OrderDetails from "../pages/Orders/OrderDetails";

import Profile from "../pages/Profile/Profile";

import ProtectedRoute from "../components/auth/ProtectedRoute";

function NotFound() {
  return (
    <div className="not-found-page">
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <a href="/" className="btn btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/shop/:category" element={<Shop />} />

      <Route
        path="/product/:id"
        element={<ProductDetailsPage />}
      />

      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders/:id"
        element={
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;