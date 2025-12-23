import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    let action = null;

    setCart((prev) => {
      const exist = prev.find((item) => item._id === product._id);

      if (exist) {
        action = "increase";
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      action = "add";
      return [...prev, { ...product, qty: 1 }];
    });

    if (action === "add") toast.success("Product added to cart");
    if (action === "increase") toast.success("Product quantity increased");
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };


  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
    toast.error("Product removed from cart");
  };

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
