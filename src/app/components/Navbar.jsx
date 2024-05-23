"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";
import { Switch } from "@nextui-org/react";
export const menuItems = [
  {
    name: "Home",
    to: "hero",
  },
  {
    name: "About me",
    to: "about",
  },
  {
    name: "Skills",
    to: "skills",
  },
  {
    name: "Project",
    to: "project",
  },
];
export default function App() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeLink, setActiveLink] = useState("#hero");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggle = () => {
    menu.current.click();
  };
  const menu = useRef(null);
  // useEffect(() => {
  //   setIsMenuOpen(false);
  // }, [isMenuOpen]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const handleThemeChange = () => {
    // Inversez le thème actuel lors du changement du commutateur
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Navbar
      maxWidth="xl"
      id="nav"
      style={{ padding: 0 }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          // 'bg-transparent',
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
          "data-[active=true]:text-blue-500",
        ],
        root: "px-0", // Remplacez px-6 par px-0
      }}
    >
      <NavbarBrand>
        {/* <AcmeLogo /> */}

        <NavbarContent justify="start">
          <Image src="/logo.png" alt="logo" width={120} height={120} />
        </NavbarContent>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-10" justify="center">
        <NavbarItem isActive={activeLink === "#hero"}>
          <Link
            color="foreground"
            href="#hero"
            className={activeLink === "#hero" ? "text-[#5DE4F6]" : "text-white"}
            onClick={() => handleLinkClick("#hero")}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeLink === "#about"}>
          <Link
            href="#about"
            aria-current="page"
            className={
              activeLink === "#about" ? "text-[#5DE4F6]" : "text-white"
            }
            onClick={() => handleLinkClick("#about")}
          >
            About me
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeLink === "#skills"}>
          <Link
            color="foreground"
            href="#skills"
            className={
              activeLink === "#skills" ? "text-[#5DE4F6]" : "text-white"
            }
            onClick={() => handleLinkClick("#skills")}
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeLink === "#project"}>
          {/* {isActive } */}

          <Link
            // color="foreground"
            href="#project"
            aria-current="page"
            className={
              activeLink === "#project" ? "text-[#5DE4F6]" : "text-white"
            }
            onClick={() => handleLinkClick("#project")}
          >
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="text-xs lg:flex">
          {/* <Switch
            defaultSelected={theme === "dark"} 
            color="success"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            onChange={handleThemeChange} 
          >
            {theme == "light" ? "Light mode" : "Dark mode"}
          </Switch> */}
        </NavbarItem>
        <NavbarItem className="">
          <Button
            as={Link}
            color="primary"
            href="#contact"
            variant="flat"
            className="bg-secondary text-red"
            // onClick={() => {
            //   handleLinkClick("#contact");
            //   setIsMenuOpen(false);

            // }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact me
          </Button>
        </NavbarItem>
        <NavbarContent className="md:hidden" justify="">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onChange={(isMenuOpen) => console.log(isMenuOpen)}
            ref={menu}
          />
        </NavbarContent>
        <NavbarMenu className="px-8">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              onClick={() => setIsMenuOpen(false)}
              key={`${item}-${index}`}
            >
              <Link
                className="w-full hover:cursor-pointer  "
                href={`#${item.to}`}
                onClick={() => toggle()}
                color={
                  index === 1
                    ? ""
                    : index === menuItems.length - 1
                    ? "warning"
                    : ""
                }
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
