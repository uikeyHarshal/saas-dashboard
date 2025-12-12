import React from "react";

export default function StatsCard({ title, value, delta }) {
  const pos = delta >= 0;
  return (
    <div className="bg-white p-4 rounded shadow-sm border">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className={`mt-1 text-sm ${pos ? "text-green-600" : "text-red-600"}`}>
        {pos ? "▲" : "▼"} {Math.abs(delta)}%
      </div>
    </div>
  );
}
