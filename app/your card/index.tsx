"use client";

import { useState } from "react";
import { Trash2, Tag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [promo, setPromo] = useState("");

  // Quantity o'zgartirish
  const changeQuantity = (id: string, delta: number) => {
    updateQuantity(id, delta);
  };

  // Item o'chirish
  const removeItem = (id: string) => {
    removeFromCart(id);
  };

  // Price hisoblash
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = promo === "DISCOUNT20" ? subtotal * 0.2 : 0;
  const delivery = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + delivery;

  return (
    <div className="p-6 max-w-[1450px] mx-auto text-black">
      <p className="text-sm max-[450px]:text-xs">Home &gt; Cart</p>

      <h1 className="text-4xl font-extrabold mt-2 mb-6 max-[450px]:text-2xl">
        YOUR CART
      </h1>

      <div className="flex gap-6 flex-wrap lg:flex-nowrap">
        {/* Left: Cart Items */}
        <div className="flex-1 space-y-4 min-w-[300px]">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Savat bo'sh</p>
              <p className="text-gray-400 text-sm mt-2">Mahsulot qo'shish uchun shop sahifasiga o'ting</p>
            </div>
          ) : (
            cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-xl p-4 max-[450px]:p-3"
            >
              <div className="flex items-center gap-4 max-[450px]:gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border max-[450px]:w-14 max-[450px]:h-14"
                />
                <div>
                  <h3 className="font-semibold max-[450px]:text-sm">{item.name}</h3>
                  <p className="text-sm max-[450px]:text-xs">Price: ${item.price}</p>
                  <p className="font-bold mt-1 max-[450px]:text-sm">
                    Total: ${item.price * item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 max-[450px]:gap-2">
                <div className="flex items-center border rounded-full px-3 py-1 max-[450px]:px-2">
                  <button
                    className="px-2 text-lg max-[450px]:text-sm"
                    onClick={() => changeQuantity(item.id, -1)}
                  >
                    −
                  </button>
                  <p className="px-2 max-[450px]:text-xs">{item.quantity}</p>
                  <button
                    className="px-2 text-lg max-[450px]:text-sm"
                    onClick={() => changeQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <Trash2
                  className="text-red-500 cursor-pointer max-[450px]:w-4 max-[450px]:h-4"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            </div>
            ))
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-[350px] border rounded-2xl p-6 h-fit max-[450px]:p-4">
          <h2 className="text-xl font-bold mb-4 max-[450px]:text-lg">Order Summary</h2>

          <div className="space-y-3 text-sm max-[450px]:text-xs">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-bold">${subtotal}</p>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-red-500">
                <p>Discount (-20%)</p>
                <p className="font-bold">-${discount}</p>
              </div>
            )}

            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p className="font-bold">${delivery}</p>
            </div>

            <div className="flex justify-between pt-3 border-t font-bold text-lg max-[450px]:text-sm">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>

          {/* Promo code */}
          <div className="flex items-center gap-2 mt-5">
            <div className="flex items-center border rounded-xl px-3 w-full">
              <Tag size={18} className="max-[450px]:w-4 max-[450px]:h-4" />
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full p-2 outline-none max-[450px]:text-xs"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
              />
            </div>
            <button className="bg-black text-white px-5 py-3 rounded-xl max-[450px]:px-3 max-[450px]:py-2 max-[450px]:text-xs">
              Apply
            </button>
          </div>

          {/* Checkout */}
          <button className="bg-black text-white w-full py-3 rounded-xl mt-5 flex items-center justify-center gap-2 max-[450px]:text-sm">
            Go to Checkout <ArrowRight size={18} className="max-[450px]:w-4 max-[450px]:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
