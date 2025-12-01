"use client";

import { useCart } from "./context/CartContext";
import Footer from "./footer/Footer";

export default function ConditionalFooter() {
  const { showCartOnly } = useCart();

  return <Footer />;
}

