"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function ShowExtras({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";

  // When viewing a product page, don't render the homepage extras.
  if (pathname.startsWith("/product")) {
    return null;
  }

  return <>{children}</>;
}
