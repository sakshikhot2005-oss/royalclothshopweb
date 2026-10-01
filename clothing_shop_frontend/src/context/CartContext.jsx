import {
  createContext,
  useEffect,
  useMemo,
  useState
} from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (
    product,
    quantity = 1,
    size = "M",
    color = "Default"
  ) => {
    setCartItems((current) => {
      const existing = current.find(
        (item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
            ? {
                ...item,
                quantity: item.quantity + quantity
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity,
          size,
          color
        }
      ];
    });
  };

  const removeFromCart = (
    id,
    size,
    color
  ) => {
    setCartItems((current) =>
      current.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size &&
            item.color === color
          )
      )
    );
  };

  const updateQuantity = (
    id,
    quantity,
    size,
    color
  ) => {
    if (quantity <= 0) {
      removeFromCart(id, size, color);
      return;
    }

    setCartItems((current) =>
      current.map((item) =>
        item.id === id &&
        item.size === size &&
        item.color === color
          ? {
              ...item,
              quantity
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + Number(item.quantity || 0),
        0
      ),
    [cartItems]
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total +
          Number(item.price || 0) *
            Number(item.quantity || 0),
        0
      ),
    [cartItems]
  );

  const shipping = subtotal >= 999 || subtotal === 0
    ? 0
    : 99;

  const total = subtotal + shipping;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        shipping,
        total,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}