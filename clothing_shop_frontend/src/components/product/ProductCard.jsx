import {
  Heart,
  ShoppingBag,
  Star
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import { useCart } from "../../hooks/useCart";

import {
  useContext
} from "react";

import {
  WishlistContext
} from "../../context/WishlistContext";

import {
  formatCurrency
} from "../../utils/helpers";

function ProductCard({ product }) {
  const { addToCart } =
    useCart();

  const {
    isInWishlist,
    toggleWishlist
  } = useContext(WishlistContext);

  const liked =
    isInWishlist(product.id);

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <Link
          to={`/product/${product.id}`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </Link>

        {product.discount && (
          <span className="discount-badge">
            -{product.discount}%
          </span>
        )}

        <button
          className={`wishlist-button ${
            liked ? "liked" : ""
          }`}
          onClick={() =>
            toggleWishlist(product)
          }
        >
          <Heart
            size={19}
            fill={
              liked
                ? "currentColor"
                : "none"
            }
          />
        </button>

        <button
          className="quick-add"
          onClick={() =>
            addToCart(product)
          }
        >
          <ShoppingBag size={17} />
          Add to Cart
        </button>
      </div>

      <div className="product-info">
        <p className="product-category">
          {product.category}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <div className="product-rating">
          <Star
            size={14}
            fill="currentColor"
          />

          <span>
            {product.rating}
          </span>
        </div>

        <div className="product-price">
          <strong>
            {formatCurrency(
              product.price
            )}
          </strong>

          {product.oldPrice && (
            <del>
              {formatCurrency(
                product.oldPrice
              )}
            </del>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;