import React from "react";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";

export default function Topbar({ isDark, setIsDark, collapsed, setCollapsed }) {
  return (
    <header className={`${isDark ? "bg-gray-900 border-b border-gray-700" : "bg-white border-b"} w-full flex items-center justify-between p-4`}>
      <div className="flex items-center gap-4">
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
          <FiMenu />
        </button>

        <div className="relative">
          <input className="px-3 py-2 border rounded-md w-72" placeholder="Search..." />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Toggle theme"
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </button>

        <div className="text-sm">{/* show name with muted color */}Harshal Uikey</div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white">HU</div>
      </div>
    </header>
  );
}
