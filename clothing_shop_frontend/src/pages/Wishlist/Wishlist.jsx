import {
  Heart
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import ProductGrid
  from "../../components/product/ProductGrid";

import {
  useContext
} from "react";

import {
  WishlistContext
} from "../../context/WishlistContext";

function Wishlist() {
  const { wishlist } =
    useContext(
      WishlistContext
    );

  return (
    <div className="wishlist-page page-container">
      <div className="page-title">
        <p>YOUR FAVORITES</p>

        <h1>Wishlist</h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-state">
          <Heart size={50} />

          <h2>
            Your Wishlist is Empty
          </h2>

          <p>
            Save products you love
            here.
          </p>

          <Link
            to="/shop"
            className="btn btn-primary"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <ProductGrid
          products={wishlist}
        />
      )}
    </div>
  );
}

export default Wishlist;