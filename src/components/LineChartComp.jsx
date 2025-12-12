import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const sampleData = [
  { day: "01", users: 120 },
  { day: "02", users: 210 },
  { day: "03", users: 150 },
  { day: "04", users: 300 },
  { day: "05", users: 260 },
  { day: "06", users: 320 },
  { day: "07", users: 400 },
  { day: "08", users: 360 },
  { day: "09", users: 420 },
  { day: "10", users: 480 },
  { day: "11", users: 520 },
  { day: "12", users: 600 },
];

export default function LineChartComp({ data = sampleData }) {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: -12, bottom: 8 }}>
          <CartesianGrid stroke="#edf2f7" strokeDasharray="3 3" />
          <XAxis dataKey="day" padding={{ left: 8, right: 8 }} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
