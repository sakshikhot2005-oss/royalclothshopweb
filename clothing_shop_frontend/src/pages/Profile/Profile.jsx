import {
  LogOut,
  User,
  Mail,
  Package,
  Heart
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import {
  useAuth
} from "../../hooks/useAuth";

function Profile() {
  const {
    user,
    logout
  } = useAuth();

  return (
    <div className="profile-page page-container">
      <div className="page-title">
        <p>MY ACCOUNT</p>
        <h1>Profile</h1>
      </div>

      <div className="profile-layout">
        <div className="profile-card">
          <div className="profile-avatar">
            <User size={40} />
          </div>

          <h2>
            {user?.name ||
              "Royal Customer"}
          </h2>

          <p>
            {user?.email ||
              "customer@example.com"}
          </p>

          <button
            className="btn btn-outline"
            onClick={logout}
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>

        <div className="profile-links">
          <Link
            to="/orders"
            className="profile-link-card"
          >
            <Package size={24} />

            <div>
              <h3>My Orders</h3>
              <p>
                View your order history
              </p>
            </div>
          </Link>

          <Link
            to="/wishlist"
            className="profile-link-card"
          >
            <Heart size={24} />

            <div>
              <h3>Wishlist</h3>
              <p>
                View saved products
              </p>
            </div>
          </Link>

          <div className="profile-link-card">
            <Mail size={24} />

            <div>
              <h3>Email</h3>

              <p>
                {user?.email ||
                  "Not available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;