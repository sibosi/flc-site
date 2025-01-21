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
import Logo from "@/public/logo.svg";

const FLCLogo = () => {
  return <Image src={Logo} alt="FLC Logo" width={50} height={50} />;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pages = [
    { href: "/", label: "Főoldal" },
    { href: "/rolunk", label: "Rólunk" },
    { href: "/modulok", label: "Modulok" },
    { href: "/versenyek", label: "Versenyek" },
    { href: "/oregdiak-progran", label: "Öregdiák program" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <FLCLogo />
          <p className="font-bold text-inherit">FLC</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand>
          <FLCLogo />
          <p className="font-bold text-inherit">FLC</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end"></NavbarContent>

      <NavbarMenu>
        {pages.map((item) => (
          <NavbarMenuItem key={`${item.label}-label`}>
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
