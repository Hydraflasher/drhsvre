"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <div className="flex items-center justify-center">
            <svg
              width="39"
              height="43"
              viewBox="0 0 39 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              exponent="342423"
              className=""
            >
              <path
                d="M0.710815 6.67346L19.4317 0.606445V42.6064C6.05944 37.0059 0.710815 26.2727 0.710815 20.207V6.67346Z"
                fill="#0500FF"
              ></path>
              <path
                d="M38.1537 6.67346L19.4329 0.606445V42.6064C32.8051 37.0059 38.1537 26.2727 38.1537 20.207V6.67346Z"
                fill="url(#paint0_linear_524_75868342423)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_524_75868342423"
                  x1="33.1809"
                  y1="-2.33467"
                  x2="19.115"
                  y2="42.0564"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.02" stop-color="#0000FF"></stop>
                  <stop offset="0.08" stop-color="#0094FF"></stop>
                  <stop offset="0.16" stop-color="#48FF91"></stop>
                  <stop offset="0.42" stop-color="#0094FF"></stop>
                  <stop offset="0.68" stop-color="#0038FF"></stop>
                  <stop offset="0.9" stop-color="#0500FF"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p className="text-[#0500FF] text-2xl font-bold ml-2">
              Trust Wallet <span className="text-[#3375BB]">Gift</span>
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-[#3375BB] dark:text-gray-200 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-gray-700 hover:text-[#3375BB] dark:text-gray-200 dark:hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#verification"
            className="text-gray-700 hover:text-[#3375BB] dark:text-gray-200 dark:hover:text-white transition-colors"
          >
            Claim Gift
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-700 hover:text-[#3375BB] dark:text-gray-200 dark:hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="md:hidden flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#3375BB] dark:text-gray-200 dark:hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-gray-700 hover:text-[#3375BB] dark:text-gray-200 dark:hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              href="#verification"
              className="text-gray-700 hover:text-[#3375BB] dark:text-gray-200 dark:hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              Claim Gift
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-[#3375BB] dark:text-gray-200 dark:hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
