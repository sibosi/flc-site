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
    <div className="w-full bg-transparent ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Image src={Logo} alt="FLC Logo" width={50} height={50} />
              FLC - EJG
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {pages.map((page) => (
                  <a
                    key={page.href}
                    href={page.href}
                    className="text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-100"
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
