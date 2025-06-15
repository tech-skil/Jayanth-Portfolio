import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Home", path: "/home" },
  { name: "Education", path: "/home/education" },
  { name: "Experience", path: "/home/AchievementShowcase" },
  { name: "Contacts", path: "/home/contactform" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const ThemeToggleButton = () => (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center rounded-[90%] shadow-lg ring-[3px] dark:ring-blue-50 ring-purple-700 drop-shadow-2xl border-[#0c1624] dark:border-white p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none"
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );

  return (
    <div className="sticky top-0 z-50">
      <Disclosure as="nav" className="bg-gray-50 dark:bg-[#0b1625] shadow-md">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Logo */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link className="font-bold cursor-pointer" to="/home">
                      My Portfolio
                    </Link>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={classNames(
                          "text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:border-b-2 hover:border-purple-600 dark:hover:border-purple-400",
                          "rounded-md px-3 py-2 text-sm font-medium active:bg-slate-100 dark:active:bg-gray-800 focus:outline-none focus:border-b-2 focus:border-purple-600 dark:focus:border-purple-400 focus:text-purple-600 dark:focus:text-purple-400"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="flex items-center justify-center">
                      <ThemeToggleButton />
                    </div>
                  </div>
                </div>

                {/* Mobile Theme Toggle */}
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  <ThemeToggleButton />
                </div>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    as={Link}
                    key={item.name}
                    to={item.path}
                    className={classNames(
                      "navmenue block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
            <hr />
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
