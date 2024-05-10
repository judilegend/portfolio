"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";
import { Switch } from "@nextui-org/react";
export default function App() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
        ],
        root: "px-0", // Remplacez px-6 par px-0
      }}
    >
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Image src="/logo.png" alt="logo" width={120} height={120} />{" "}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="text-xs lg:flex">
          <Switch
            defaultSelected={theme === "dark"} // Définissez le commutateur sur "dark" si le thème actuel est "dark"            size="md"
            color="success"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            onChange={handleThemeChange} // Appelez la fonction de gestion du changement de thème lorsque le commutateur est modifié
          >
            {theme == "light" ? "Light mode" : "Dark mode"}
          </Switch>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="bg-secondary text-red"
          >
            Contact me
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
