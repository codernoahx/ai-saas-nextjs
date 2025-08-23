"use client";
import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import CloseIcon from "@/assets/close.svg";

const NavLinks = () => (
  <>
    <a href="#">About</a>
    <a href="#">Features</a>
    <a href="#">Customers</a>
    <a href="#">Updates</a>
    <a href="#">Help</a>
    <button className="btn btn-primary">Get for free</button>
  </>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <div className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </div>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <NavLinks />
            </nav>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden flex flex-col gap-4 mt-4 text-black/80 items-center">
              <NavLinks />
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
