import React, { useState } from "react";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <Dashboard
        isDark={isDark}
        setIsDark={setIsDark}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
    </div>
  );
}
