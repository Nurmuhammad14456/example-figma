"use client";

import { useCart } from "./context/CartContext";

export default function ConditionalContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showCartOnly, showCheckoutOnly } = useCart();

  if (showCartOnly || showCheckoutOnly) {
    return null;
  }

  return <>{children}</>;
}

