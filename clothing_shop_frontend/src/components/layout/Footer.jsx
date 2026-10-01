import {
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-brand">
          <h2>ROYAL CLOTH</h2>

          <p>
            Premium fashion for your
            everyday style.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <Instagram size={19} />
            </a>

            <a href="#" aria-label="Facebook">
              <Facebook size={19} />
            </a>

            <a href="#" aria-label="Twitter">
              <Twitter size={19} />
            </a>

            <a href="#" aria-label="Youtube">
              <Youtube size={19} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>

          <Link to="/shop/men">
            Men
          </Link>

          <Link to="/shop/women">
            Women
          </Link>

          <Link to="/shop/kids">
            Kids
          </Link>

          <Link to="/shop/new-arrivals">
            New Arrivals
          </Link>
        </div>

        <div className="footer-column">
          <h3>Customer Care</h3>

          <Link to="/orders">
            Track Order
          </Link>

          <a href="#">
            Shipping
          </a>

          <a href="#">
            Returns
          </a>

          <a href="#">
            Contact Us
          </a>
        </div>

        <div className="footer-column">
          <h3>Account</h3>

          <Link to="/profile">
            My Account
          </Link>

          <Link to="/wishlist">
            Wishlist
          </Link>

          <Link to="/cart">
            Shopping Bag
          </Link>

          <Link to="/orders">
            My Orders
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Royal
          Cloth. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;