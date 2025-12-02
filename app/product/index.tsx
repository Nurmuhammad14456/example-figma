"use client";
import Image from "next/image";
import { useState } from "react";
import { commentsData } from "../data/commits";
import { BiDotsVerticalRounded, BiSliderAlt } from "react-icons/bi";

type Comment = {
  id: string;
  rating: number;
  name: string;
  review: string;
  day?: string;
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "olive", class: "bg-olive" },
    { name: "green", class: "bg-green-700" },
    { name: "navy", class: "bg-blue-900" },
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  // Barcha commentlar doim ko‘rinadi
  const filteredComments = commentsData;

  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Breadcrumb */}
      <div className="text-black text-sm mb-5">
        Home &gt; Shop &gt; Men &gt; T-shirts
      </div>

      {/* Main Product Info */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left - Small Images */}
        <div className="flex flex-col gap-2">
          <Image src="/images/tshirt-front.jpg" alt="Front view" width={150} height={167} className="rounded-lg border border-gray-200 cursor-pointer" />
          <Image src="/images/tshirt-back.jpg" alt="Back view" width={150} height={167} className="rounded-lg border border-gray-200 cursor-pointer" />
          <Image src="/img/Frame 62.png" alt="Model view" width={150} height={167} className="rounded-lg border border-gray-200 cursor-pointer" />
        </div>

        {/* Main Image */}
        <div className="flex flex-col gap-3">
          <Image src="/img/3.svg" alt="T-shirt main" width={440} height={530} className="rounded-lg border border-gray-200" />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-black">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center gap-2 text-black">
            <div className="flex text-yellow-400">★★★★☆</div>
            <span>4.5/5</span>
          </div>
          <div className="flex items-center gap-3 text-2xl text-black">
            <span className="font-bold">$260</span>
            <span className="line-through text-gray-400">$300</span>
            <span className="bg-pink-100 text-pink-500 px-2 py-1 rounded-md text-sm">-40%</span>
          </div>
          <p className="text-black">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Colors */}
          <div>
            <h3 className="font-semibold mb-2 text-black">Select Colors</h3>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.name ? "border-black" : "border-gray-200"} ${color.class}`}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="font-semibold mb-2 text-black">Choose Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full border ${selectedSize === size ? "bg-black text-white" : "bg-gray-100 text-black"}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded-full text-black">
              <button className="px-3 py-1" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="px-4">{quantity}</span>
              <button className="px-3 py-1" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full">Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 border-b border-gray-300 flex justify-between items-center">
        <div className="flex space-x-10 text-black font-semibold">
          {["Product Details", "Rating & Reviews", "FAQs"].map((tab, idx) => (
            <button
              key={idx}
              className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black hover:after:bg-black"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="border rounded-full p-2 text-black">
            <BiSliderAlt />
          </button>
          <select className="border rounded-full px-2 py-2 text-black">
            <option>Latest</option>
            <option>Highest Rating</option>
            <option>Lowest Rating</option>
          </select>
          <button className="bg-black text-white px-4 py-2 rounded-full">Write a Review</button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="p-5 rounded-2xl mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredComments.map((c) => (
            <div key={c.id} className="bg-white h-[200px] shadow p-4 rounded-xl border text-black flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="flex space-x-1 mb-2 text-2xl">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < c.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <BiDotsVerticalRounded className="text-3xl"/>
              </div>
              <h3 className="font-semibold mb-2">{c.name} ✅</h3>
              <p className="text-black overflow-hidden text-ellipsis line-clamp-4">{c.review}</p>
              {c.day && <p className="text-gray-400 text-sm mt-1">{c.day}</p>}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-white text-black border w-[250px] px-6 py-3 rounded-full">Load More Reviews</button>
        </div>
      </div>
    </div>
  );
}
