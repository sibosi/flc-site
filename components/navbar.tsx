import Image from "next/image";
import React from "react";
import Logo from "../public/logo.svg";

const pages = [
  { href: "/", label: "Főoldal" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/modulok", label: "Modulok" },
  { href: "/versenyek", label: "Versenyek" },
  { href: "/oregdiak-progran", label: "Öregdiák program" },
];

const Navbar = () => {
  return (
    <div className="w-full bg-transparent">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-shrink-0 items-center gap-2">
              <Image src={Logo} alt="FLC Logo" width={50} height={50} />
              FLC - EJG
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {pages.map((page) => (
                  <a
                    key={page.href}
                    href={page.href}
                    className="text-gray-900 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-100"
                  >
                    {page.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
