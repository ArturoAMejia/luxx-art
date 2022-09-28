import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCart } from "react-use-cart";
import Image from "next/image";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Acerca de", href: "/acerca", current: false },
  { name: "Galería", href: "/galeria", current: false },
  { name: "Contacto", href: "/contact", current: false },
];

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl py-4 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div className="block  lg:hidden">
                    <Image
                      width={100}
                      height={80}
                      src="/logo.png"
                      alt="Your Company"
                    />
                  </div>

                  <div className="hidden lg:block">
                    <Image
                      width={100}
                      height={80}
                      src="/logo.png"
                      alt="Your Company"
                    />
                  </div>
                </div>
                <div className="hidden lg:block py-10 px-3">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className="text-gray-600 hover:text-gray-900
                          px-3 py-2 rounded-md text-base font-medium"
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <Link href="/cart">
                    <a className="static">
                      <ShoppingCartIcon className="h-6 w-6 text-black" />
                      <span className="absolute items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-gray-800 top-2">
                        {totalItems > 9 ? "9+" : totalItems}
                      </span>
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Disclosure.Button
                    as="a"
                    className="text-gray-600 hover:text-gray-900
                      block px-3 py-2 rounded-md text-base font-medium"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
