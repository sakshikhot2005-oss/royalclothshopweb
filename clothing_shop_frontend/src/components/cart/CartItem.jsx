import {
  Minus,
  Plus,
  Trash2
} from "lucide-react";

import { useCart } from "../../hooks/useCart";

import {
  formatCurrency
} from "../../utils/helpers";

function CartItem({ item }) {
  const {
    updateQuantity,
    removeFromCart
  } = useCart();

  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-item-info">
        <h3>{item.name}</h3>

        <p>
          Size: {item.size}
        </p>

        <p>
          Color: {item.color}
        </p>

        <strong>
          {formatCurrency(
            item.price
          )}
        </strong>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-control">
          <button
            onClick={() =>
              updateQuantity(
                item.id,
                item.quantity - 1,
                item.size,
                item.color
              )
            }
          >
            <Minus size={15} />
          </button>

          <span>
            {item.quantity}
          </span>

          <button
            onClick={() =>
              updateQuantity(
                item.id,
                item.quantity + 1,
                item.size,
                item.color
              )
            }
          >
            <Plus size={15} />
          </button>
        </div>

        <button
          className="delete-button"
          onClick={() =>
            removeFromCart(
              item.id,
              item.size,
              item.color
            )
          }
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;