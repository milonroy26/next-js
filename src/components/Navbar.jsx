"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  let currentRoute = usePathname();
  return (
    <div>
      <header className="shadow-md">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              Logo
            </a>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    href={{
                      pathname: "/",
                    }}
                    className={
                      currentRoute === "/" ? "activeLink" : "pendingLink"
                    }
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/blog",
                      query: { name: "jastin", id: "105" },
                    }}
                    className={
                      currentRoute === "/blog" ? "activeLink" : "pendingLink"
                    }
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className={
                      currentRoute === "/about" ? "activeLink" : "pendingLink"
                    }
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className={
                      currentRoute === "/contact" ? "activeLink" : "pendingLink"
                    }
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
