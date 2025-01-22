import React from "react";

const Alert = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative rounded-xl border-2 border-selfprimary-700 bg-selfprimary-100 px-4 py-3 text-selfprimary-700"
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
