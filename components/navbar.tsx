"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import Image from "next/image";
import Logo from "@/public/logo-transparent-white.svg";

const FLCLogo = () => {
  return (
    <Image
      className="fill-white"
      src={Logo}
      alt="FLC Logo"
      width={50}
      height={50}
    />
  );
};

const pages = [
  { href: "/", label: "Főoldal" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/modulok", label: "Modulok" },
  { href: "/versenyek", label: "Versenyek" },
  { href: "/oregdiak-progran", label: "Öregdiák program" },
];

export default function PageNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState<string>();

  React.useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-selfprimary-900 text-white"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <FLCLogo />
          <p className="font-bold text-inherit">FLC - EJG</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand>
          <FLCLogo />
          <p className="font-bold text-inherit">FLC - EJG</p>
        </NavbarBrand>
        {pages.map((page) => (
          <NavbarItem key={page.href} isActive={page.href === currentPage}>
            <Link className="text-white" href={page.href}>
              {page.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end"></NavbarContent>

      <NavbarMenu>
        {pages.map((item) => (
          <NavbarMenuItem
            key={`${item.label}-label`}
            isActive={item.href === currentPage}
          >
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
