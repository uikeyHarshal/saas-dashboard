import React from "react";
import { FiHome, FiBarChart2, FiBox, FiUsers, FiSettings } from "react-icons/fi";

const NAV = [
  { name: "Overview", icon: <FiHome /> },
  { name: "Analytics", icon: <FiBarChart2 /> },
  { name: "Products", icon: <FiBox /> },
  { name: "Customers", icon: <FiUsers /> },
  { name: "Settings", icon: <FiSettings /> },
];

export default function Sidebar({ collapsed = false, isDark = false }) {
  return (
    <aside className={`${collapsed ? "w-20" : "w-64"} ${isDark ? "bg-gray-900 border-r border-gray-700" : "bg-white border-r"} h-screen sticky top-0 transition-width duration-200`}>
      <div className={`p-6 border-b ${isDark ? "border-gray-700" : ""}`}>
        <h1 className={`text-lg font-bold ${collapsed ? "text-xs" : ""}`}>YourBrand</h1>
      </div>

      <nav className="p-4 space-y-1">
        {NAV.map((n) => (
          <div key={n.name} className="flex items-center gap-3 p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded text-xl">{n.icon}</div>
            {!collapsed && <div className="text-sm font-medium">{n.name}</div>}
          </div>
        ))}
      </nav>
    </aside>
  );
}
