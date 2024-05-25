"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
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
    name: "Projects",
    to: "project",
  },
];

export default function App() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeLink, setActiveLink] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    menu.current.click();
  };
  const menu = useRef(null);

  useEffect(() => {
    setMounted(true);

    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  if (!mounted) return null;

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
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
        root: "px-0",
      }}
    >
      <NavbarBrand>
        <NavbarContent justify="start">
          <Image src="/logo.png" alt="logo" width={120} height={120} />
        </NavbarContent>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-10" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.to} isActive={activeLink === item.to}>
            <ScrollLink
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className={
                activeLink === item.to ? "text-[#5DE4F6]" : "text-white"
              }
              onSetActive={handleSetActive}
            >
              {item.name}
            </ScrollLink>
          </NavbarItem>
        ))}
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
            as={ScrollLink}
            color="primary"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-secondary text-red"
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
              <ScrollLink
                className="w-full hover:cursor-pointer"
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => toggle()}
                onSetActive={handleSetActive}
              >
                {item.name}
              </ScrollLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
