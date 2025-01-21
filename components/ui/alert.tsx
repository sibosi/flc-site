import React from "react";

const Alert = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
