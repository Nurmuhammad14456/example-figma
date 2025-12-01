"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  showCartOnly: boolean;
  setShowCartOnly: (show: boolean) => void;
  showCheckoutOnly: boolean;
  setShowCheckoutOnly: (show: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [showCartOnly, setShowCartOnly] = useState(false);
  const [showCheckoutOnly, setShowCheckoutOnly] = useState(false);

  return (
    <CartContext.Provider value={{ 
      showCartOnly, 
      setShowCartOnly,
      showCheckoutOnly,
      setShowCheckoutOnly
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

