import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", sales: 400 },
  { name: "Tue", sales: 300 },
  { name: "Wed", sales: 350 },
  { name: "Thu", sales: 450 },
  { name: "Fri", sales: 500 },
  { name: "Sat", sales: 420 },
  { name: "Sun", sales: 480 },
];

export default function BarChartComp() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 12, left: -12, bottom: 8 }}>
        <CartesianGrid stroke="#edf2f7" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#06b6d4" radius={[8,8,0,0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
