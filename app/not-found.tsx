import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1>404 | Nincs találat</h1>
      <Link href="/" className="underline">
        Vissza a főoldalra
      </Link>
    </div>
  );
};

export default NotFound;
