import React, { createContext, useState, useContext } from 'react';

// Define CartContext
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (quantity) => {
    setCartCount((prev) => prev + quantity);
  };

  const removeFromCart = (quantity) => {
    setCartCount((prev) => Math.max(prev - quantity, 0)); // Prevent negative cart count
  };

  const clearCart = () => {
    setCartCount(0); // Reset the cart count to zero
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use CartContext
export const useCart = () => useContext(CartContext);
