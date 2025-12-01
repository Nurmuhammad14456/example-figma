"use client";

import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrderId = `ORD-${Date.now()}`;
    setOrderId(newOrderId);
    setOrderPlaced(true);

    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });
      setOrderPlaced(false);
    }, 3000);
  };

  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-[1450px] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-black">Check Out</h1>

        {orderPlaced && (
          <div className="mb-8 bg-green-50 border border-green-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-700 mb-2">
              ✓ Order Successfully Placed!
            </h3>
            <p className="text-green-700">
              Your order ID:{" "}
              <span className="font-mono font-bold">{orderId}</span>
            </p>
            <p className="text-green-600 text-sm mt-2">
              Confirmation email sent to: <strong>{formData.email}</strong>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-300 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-6 text-black">
                Contact Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-black mb-2">
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-black mb-2">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-black mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-black mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-3 rounded mt-8 hover:bg-gray-800 transition-colors"
                >
                  {orderPlaced ? "Order Placed! 🎉" : "Place Order"}
                </button>
              </form>
            </div>
          </div>

          <div>
            <div
              className="bg-white border border-gray-300 p-6 rounded-lg 
              lg:sticky lg:top-20"
            >
              <h2 className="text-lg font-semibold mb-6 text-black">
                Order summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-black">JenkateMW</p>
                    <p className="text-sm text-black">Quantity: 1</p>
                  </div>
                  <p className="text-green-600 font-medium">
                    -$25.00{" "}
                    <button className="text-xs text-red-500 hover:underline ml-1">
                      [Remove]
                    </button>
                  </p>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between">
                  <span className="text-black">Shipping</span>
                  <span className="font-medium text-black">Free</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-black">Subtotal</span>
                  <span className="font-medium text-black">$99.00</span>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between text-lg font-bold">
                  <span className="text-black">Total</span>
                  <span className="text-black">$234.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
