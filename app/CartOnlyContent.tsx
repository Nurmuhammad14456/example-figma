"use client";

import { useCart } from "./context/CartContext";
import CartPage from "./your card";

export default function CartOnlyContent() {
  const { showCartOnly } = useCart();

  if (!showCartOnly) {
    return null;
  }

  return <CartPage />;
}

