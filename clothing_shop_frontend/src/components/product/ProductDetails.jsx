import {
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Star
} from "lucide-react";

import { useState } from "react";

import { useCart } from "../../hooks/useCart";

import { useContext } from "react";

import {
  WishlistContext
} from "../../context/WishlistContext";

import {
  formatCurrency
} from "../../utils/helpers";

function ProductDetails({
  product
}) {
  const {
    addToCart
  } = useCart();

  const {
    isInWishlist,
    toggleWishlist
  } = useContext(
    WishlistContext
  );

  const [quantity, setQuantity] =
    useState(1);

  const [size, setSize] =
    useState(
      product.sizes?.[1] ||
        product.sizes?.[0] ||
        "M"
    );

  const [color, setColor] =
    useState(
      product.colors?.[0] ||
        "Default"
    );

  const liked =
    isInWishlist(product.id);

  return (
    <div className="product-details">
      <div className="product-details-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-details-info">
        <p className="detail-category">
          {product.category}
        </p>

        <h1>{product.name}</h1>

        <div className="detail-rating">
          <Star
            size={17}
            fill="currentColor"
          />

          <span>
            {product.rating}
          </span>

          <span>
            · 128 Reviews
          </span>
        </div>

        <div className="detail-price">
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

        <p className="detail-description">
          Premium quality clothing
          designed for comfort,
          style and everyday use.
          Made with carefully
          selected materials.
        </p>

        <div className="detail-option">
          <h4>Size</h4>

          <div className="option-buttons">
            {(product.sizes || [
              "S",
              "M",
              "L",
              "XL"
            ]).map((item) => (
              <button
                key={item}
                className={
                  size === item
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setSize(item)
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="detail-option">
          <h4>Color</h4>

          <div className="option-buttons">
            {(product.colors || [
              "Default"
            ]).map((item) => (
              <button
                key={item}
                className={
                  color === item
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setColor(item)
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="detail-option">
          <h4>Quantity</h4>

          <div className="quantity-control">
            <button
              onClick={() =>
                setQuantity(
                  Math.max(
                    1,
                    quantity - 1
                  )
                )
              }
            >
              <Minus size={16} />
            </button>

            <span>{quantity}</span>

            <button
              onClick={() =>
                setQuantity(
                  quantity + 1
                )
              }
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="detail-actions">
          <button
            className="btn btn-primary btn-large"
            onClick={() =>
              addToCart(
                product,
                quantity,
                size,
                color
              )
            }
          >
            <ShoppingBag size={19} />
            Add to Bag
          </button>

          <button
            className={`btn wishlist-detail ${
              liked
                ? "active"
                : ""
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
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;