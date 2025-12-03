"use client";

import Image from "next/image";
import Link from "next/link";
import { product } from "../data/pruduct";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

// 🔹 Product tipi
type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating?: number;
};

export default function Homee() {
  const topSelling = product.slice(4, 8);
  const { addToCart } = useCart();

  const handleAddToCart = (item: Product) => {
    addToCart(item);
  };

  const ProductCard = ({ item }: { item: Product }) => {
    const discountPercentage = item.oldPrice
      ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
      : 0;

    return (
      <div className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg hover:border hover:border-gray-300 transition group w-full">
        <Link href={`/product?id=${item.id}`} className="block">
          <div className="w-full h-80 relative overflow-hidden rounded-xl bg-gray-50 cursor-pointer flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        <h2 className="mt-4 font-semibold text-black text-lg">{item.name}</h2>

        {item.rating !== undefined && (
          <div className="flex items-center mt-1">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.floor(item.rating ?? 0) ? "★" : "☆"}
                </span>
              ))}
            </div>
            <span className="ml-2 text-gray-400 text-sm">{item.rating}/5</span>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between w-full">
          <span className="font-bold text-black text-xl">${item.price}</span>

          <div className="flex items-center gap-2">
            {item.oldPrice && (
              <span className="text-gray-400 line-through text-sm">
                ${item.oldPrice}
              </span>
            )}

            {item.oldPrice && discountPercentage > 0 && (
              <span className="text-pink-500 text-sm font-medium">
                -{discountPercentage}%
              </span>
            )}

            <ShoppingCart 
              size={20} 
              className="text-black cursor-pointer hover:text-gray-600 transition-colors" 
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(item);
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-5 max-w-7xl mx-auto mt-5">
      {/* TOP SELLING */}
      <h1 className="text-4xl text-black font-bold text-center mt-[74px] mb-8">
        TOP SELLING
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topSelling.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="w-[214px] py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition duration-300">
          View All
        </button>
      </div>
    </div>
  );
}
