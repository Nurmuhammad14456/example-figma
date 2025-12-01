"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);
  const { showCartOnly, setShowCartOnly, setShowCheckoutOnly } = useCart();

  const scrollToCart = () => {
    setShowCartOnly(true);
    setTimeout(() => {
      const element = document.getElementById("your-cart");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Banner */}
      {bannerOpen && (
        <div className="w-full bg-black text-white px-10">
          <div className="max-w-[1450px] mx-auto px-4 py-2 flex items-center justify-center relative">
            <p className="text-center text-sm md:text-base">
              Sign up and get 20% off your first order.{" "}
              <span className="font-semibold cursor-pointer underline">
                Sign Up Now
              </span>
            </p>
            <button
  className="absolute  right-5  text-white hidden sm:block" 
  style={{ display: window.innerWidth > 500 ? 'block' : 'none' }}
  onClick={() => setOpen(false)}
>
  <X size={26} />
</button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div className="w-full shadow-sm bg-white text-black">
        <div className="max-w-[1450px] mx-auto px-4 md:px-10 py-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-10 flex-1">
            <button className="block md:hidden" onClick={() => setOpen(true)}>
              <Menu size={26} />
            </button>

            <h1
              className="text-2xl font-bold whitespace-nowrap cursor-pointer"
              onClick={() => {
                setShowCartOnly(false);
                setShowCheckoutOnly(false);
              }}
            >
              SHOP.CO
            </h1>

            <div className="hidden md:flex flex-nowrap items-center gap-6 lg:gap-8 text-[16px] font-medium">
              <p className="cursor-pointer whitespace-nowrap">Shop</p>
              <p
                className="cursor-pointer whitespace-nowrap hover:text-gray-600 transition-colors"
                onClick={() => {
                  setShowCartOnly(false);
                  setShowCheckoutOnly(true);
                }}
              >
                Check Out
              </p>
              <p className="cursor-pointer whitespace-nowrap">New Arrivals</p>
              <p className="cursor-pointer whitespace-nowrap hidden lg:block">Brands</p>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-[450px] bg-gray-100 py-2 px-4 rounded-full">
            <input
              placeholder="Search for products..."
              className="bg-transparent w-full outline-none text-black"
            />
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="block md:hidden">
              <Search size={22} />
            </div>
            <button
              onClick={scrollToCart}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              <ShoppingCart size={22} />
            </button>
           <button>
             <User size={22} />
           </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-white text-black shadow-lg transition-transform duration-300 p-6 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h1
            className="text-2xl font-bold whitespace-nowrap cursor-pointer"
            onClick={() => {
              setShowCartOnly(false);
              setShowCheckoutOnly(false);
              setOpen(false);
            }}
          >
            SHOP.CO
          </h1>
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-6 text-lg font-medium">
          <p className="cursor-pointer">Shop</p>
          <p
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => {
              setShowCartOnly(false);
              setShowCheckoutOnly(true);
              setOpen(false);
            }}
          >
            On Sale
          </p>
          <p className="cursor-pointer">New Arrivals</p>
          <p className="cursor-pointer">Brands</p>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </header>
  );
}
