"use client";

import { useState } from "react";
import { commentsData } from "../data/commits";

type Comment = {
  id: string;
  rating: number;
  name: string;
  review: string;
  day?: string;
};

export default function CommentsSection() {
  // Local static data bilan boshlash → useEffect va loading kerak emas
  const [comments] = useState<Comment[]>(commentsData);

  return (
    <div className="bg-gray-100 p-5 rounded-2xl max-w-full mx-auto ">
      <h2 className="text-4xl font-bold mb-4 text-black "><b>OUR HAPPY CUSTOMERS</b></h2>

      {/* Horizontal scroll container */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {comments.map((c) => (
          <div
            key={c.id}
            className="flex-shrink-0 w-[400px]  bg-white shadow p-4 rounded-xl border text-black flex flex-col justify-between"
          >
            {/* Yulduz rating */}
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < c.rating ? "text-yellow-500" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Name */}
            <h3 className="font-semibold">{c.name}✅</h3>

            <p className="text-black overflow-hidden text-ellipsis line-clamp-4">
              {c.review}
            </p>

            {c.day && <p className="text-gray-400 text-sm mt-1">{c.day}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
