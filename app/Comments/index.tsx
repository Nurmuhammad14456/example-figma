"use client";

import React, { useState } from "react"; // ← useState import qilindi
import { comments as commentsData } from "../data/commits";

export default function CommentsSection() {
  // Static data-ni to‘g‘ridan-to‘g‘ri boshlang‘ich state sifatida beramiz
  const [comments] = useState(commentsData);

  return (
    <div className="bg-gray-100 p-5 rounded-2xl max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Comments</h2>

      <div className="space-y-3 max-h-[360px] overflow-auto pr-2">
        {comments.map((c) => (
          <div
            key={c.id}
            className="bg-white shadow p-4 rounded-xl border"
          >
            <p className="text-yellow-500 font-bold">⭐ {c.rating}</p>
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-gray-600">{c.review}</p>
            {c.day && <p className="text-gray-400 text-sm mt-1">{c.day}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
