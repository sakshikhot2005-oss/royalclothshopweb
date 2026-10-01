import {
  useContext,
  useState
} from "react";

import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X
} from "lucide-react";

import {
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";

import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { WishlistContext } from "../../context/WishlistContext";

function Navbar() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const navigate = useNavigate();

  const { cartCount } = useCart();

  const { wishlist } =
    useContext(WishlistContext);

  const { user } = useAuth();

  const handleSearch = (event) => {
    event.preventDefault();

    const value = search.trim();

    if (!value) {
      return;
    }

    navigate(
      `/shop?search=${encodeURIComponent(value)}`
    );

    setSearch("");
    setMobileMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="mobile-menu-button"
          onClick={() =>
            setMobileMenu(
              !mobileMenu
            )
          }
        >
          {mobileMenu ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        <Link
          to="/"
          className="brand-logo"
        >
          ROYAL
          <span>CLOTH</span>
        </Link>

        <div
          className={`nav-links ${
            mobileMenu
              ? "mobile-active"
              : ""
          }`}
        >
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/shop">
            Shop
          </NavLink>

          <NavLink to="/shop/men">
            Men
          </NavLink>

          <NavLink to="/shop/women">
            Women
          </NavLink>

          <NavLink to="/shop/kids">
            Kids
          </NavLink>

          <NavLink to="/shop/new-arrivals">
            New Arrivals
          </NavLink>
        </div>

        <div className="navbar-actions">
          <form
            className="search-box"
            onSubmit={handleSearch}
          >
            <Search size={18} />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />
          </form>

          <Link
            to="/wishlist"
            className="icon-button"
            title="Wishlist"
            aria-label={`Wishlist, ${wishlist.length} saved products`}
          >
            <Heart size={21} />

            {wishlist.length > 0 && (
              <span className="cart-badge">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to={
              user
                ? "/profile"
                : "/login"
            }
            className="icon-button"
            title="Account"
          >
            <User size={21} />
          </Link>

          <Link
            to="/cart"
            className="icon-button cart-icon"
            title="Shopping Bag"
          >
            <ShoppingBag size={21} />

            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;