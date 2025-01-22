import React from "react";

const Alert = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  className +=
    " relative rounded-xl border-2 border-selfprimary-700 bg-selfprimary-100 px-4 py-3 text-selfprimary-700";
  return (
    <div className={className} role="alert">
      {children}
    </div>
  );
};

export default Alert;
