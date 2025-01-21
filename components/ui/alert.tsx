import React from "react";

const Alert = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative rounded border-2 border-red-400 bg-red-100 px-4 py-3 text-red-700"
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
