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

export default function App() {
  return (
    <Navbar
      maxWidth="full"
      id="nav"
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
      }}
    >
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Image
          src="/logo-no-background.png"
          alt="logo"
          width={50}
          height={50}
        />{" "}
        <p className="ml-3 text-[#FF62AD] font-sans text-lg">Portfolio</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact me
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">White</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
