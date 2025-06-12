import React from "react";

const DashHeader = () => {
  return (
    <div className="py-5 bg-gradient-to-r from-fuchsia-200 via-cyan-100 to-blue-200 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-fuchsia-700 mb-2 tracking-tight">
        Welcome to Your Dashboard
      </h1>
      <p className="text-lg text-gray-700 font-medium">
        Hello, <span className="font-semibold">User</span>! Empower your productivity and manage your insights with ease.
      </p>
    </div>
  );
};

export default DashHeader;