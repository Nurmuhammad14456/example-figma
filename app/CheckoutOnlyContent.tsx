"use client";

import { useCart } from "./context/CartContext";
import Checkout from "./check out";

export default function CheckoutOnlyContent() {
  const { showCheckoutOnly, showCartOnly } = useCart();

  if (!showCheckoutOnly || showCartOnly) {
    return null;
  }

  return <Checkout />;
}

