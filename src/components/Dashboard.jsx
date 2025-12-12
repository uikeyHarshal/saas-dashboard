import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsCard from "../components/StatsCard";
import LineChartComp from "./LineChartComp";
import BarChartComp from "./BarChartComp";

export default function Dashboard({ isDark, setIsDark, collapsed, setCollapsed }) {
  const stats = [
    { title: "Active Users", value: "4,321", delta: 12 },
    { title: "New Signups", value: "342", delta: 8 },
    { title: "Revenue", value: "$12.4k", delta: -5 },
    { title: "Avg. Session", value: "3m 12s", delta: 2 },
  ];

  return (
    <div className={`${isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"} min-h-screen flex w-full`}>
      <Sidebar collapsed={collapsed} isDark={isDark} />

      
      <div className="flex-1 w-full min-w-0">
        <Topbar
          isDark={isDark}
          setIsDark={setIsDark}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

       
        <main className="w-full">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {stats.map((s) => (
                <StatsCard key={s.title} {...s} isDark={isDark} />
              ))}
            </div>

           
            <div className="space-y-6">
              <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"} border rounded p-4 shadow-sm`}>
                <div className="text-sm text-gray-400 mb-3">Traffic (Last 30 days)</div>
                <div className="w-full h-64">
                  <LineChartComp />
                </div>
              </div>

              <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"} border rounded p-4 shadow-sm`}>
                <div className="text-sm text-gray-400 mb-3">Sales Overview</div>
                <div className="w-full h-64">
                  <BarChartComp />
                </div>
              </div>

              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              
                <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"} border rounded p-4 shadow-sm lg:col-span-1`}>
                  <div className="text-sm text-gray-400 mb-2">Recent Activity</div>
                  <ul className="space-y-3">
                    <li className="text-sm">User <b>Ali</b> signed up</li>
                    <li className="text-sm">Order #1023 completed</li>
                    <li className="text-sm">Payment failed for #1019</li>
                  </ul>
                </div>

               
                <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white"} border rounded p-4 shadow-sm lg:col-span-2`}>
                  <div className="text-sm text-gray-400 mb-3">Recent Users</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-left text-gray-400">
                        <tr>
                          <th className="p-2">Name</th>
                          <th className="p-2">Email</th>
                          <th className="p-2">Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-t border-gray-700">
                          <td className="p-2">Priya</td>
                          <td className="p-2">priya@example.com</td>
                          <td className="p-2">Active</td>
                        </tr>
                        <tr className="border-t border-gray-700">
                          <td className="p-2">Ravi</td>
                          <td className="p-2">ravi@example.com</td>
                          <td className="p-2">Pending</td>
                        </tr>
                        <tr className="border-t border-gray-700">
                          <td className="p-2">Sara</td>
                          <td className="p-2">sara@example.com</td>
                          <td className="p-2">Active</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

