"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";
import { product } from "../data/pruduct";

export type CartItem = (typeof product)[number] & { quantity: number };

interface CartContextType {
  showCartOnly: boolean;
  setShowCartOnly: (show: boolean) => void;
  showCheckoutOnly: boolean;
  setShowCheckoutOnly: (show: boolean) => void;
  cartItems: CartItem[];
  addToCart: (product: (typeof product)[number]) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "shop_cart_items";

// localStorage'dan ma'lumotlarni o'qish
function loadCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
  }
  return [];
}

// localStorage'ga saqlash
function saveCartToStorage(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [showCartOnly, setShowCartOnly] = useState(false);
  const [showCheckoutOnly, setShowCheckoutOnly] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const isInitialMount = useRef(true);

  // Sayt yuklanganda localStorage'dan ma'lumotlarni yuklash
  useEffect(() => {
    const savedCart = loadCartFromStorage();
    if (savedCart.length > 0) {
      setCartItems(savedCart);
    }
    isInitialMount.current = false;
  }, []);

  // cartItems o'zgarganda localStorage'ga saqlash
  useEffect(() => {
    // Birinchi yuklanishda saqlashni o'tkazib yuborish (infinite loop'ni oldini olish)
    if (!isInitialMount.current) {
      saveCartToStorage(cartItems);
    }
  }, [cartItems]);

  const addToCart = (productItem: (typeof product)[number]) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === productItem.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === productItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...productItem, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + delta > 0 ? item.quantity + delta : 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ 
      showCartOnly, 
      setShowCartOnly,
      showCheckoutOnly,
      setShowCheckoutOnly,
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity
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

