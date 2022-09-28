import Link from "next/link";
import React from "react";
import { SlideShow } from "./SlideShow";

export const Hero = () => {
  return (
    <section className="">
      <div className="px-4 mt-5 mx-auto max-w-screen-xl sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 ">
          <SlideShow />
          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Trabajamos por encargos!
            </h2>

            <p className="mt-4 text-gray-600">
              Trabajamos por medio de un sistema de encargos en el cual tu
              decides la fecha de entrega del producto 🔔
            </p>
            <div className="flex">
              <Link href="/galeria">
                <a className="flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
                  <span className="text-sm font-medium"> Ver más </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
