import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Fan Control</title>
      </Head>

      <div className="flex h-full flex-wrap gap-2">
        <div className="h-8 flex-auto bg-red-500 text-white">
          <p>ACER</p>
        </div>

        <div className="h-8 flex-auto bg-blue-400 text-center text-white">
          <p>NITROSENSE</p>
        </div>

        <div className="h-8 flex-auto bg-green-400 text-right text-white">
          NVIDIA [O] [-] [X]
        </div>
      </div>

      <div className="flex h-full flex-wrap gap-2">
        <div className="flex-2 h-auto flex-col bg-yellow-400 text-white">
          <div>FAN CONTROL</div>

          <div>
            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-full flex-auto bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400"
            >
              Auto
            </button>
          </div>

          <div>
            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-full flex-auto bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400"
            >
              Max
            </button>
          </div>

          <div>
            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-full flex-auto bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400"
            >
              Custom
            </button>
          </div>

          <div className="invisible">
            <button className="focus:shadow-outline h-12 w-full bg-indigo-700 px-3 text-indigo-100 transition-colors duration-150 hover:bg-indigo-800">
              Large block button
            </button>
          </div>

          <div className="invisible">
            <button className="focus:shadow-outline h-12 w-full bg-indigo-700 px-3 text-indigo-100 transition-colors duration-150 hover:bg-indigo-800">
              Large block button
            </button>
          </div>
        </div>

        <div className="h-auto flex-1 flex-wrap bg-yellow-400 text-white">
          <div className="flex flex-wrap gap-10">
            <div className="h-auto flex-auto flex-col bg-yellow-400 text-white">
              CPU - 5882 rpm
              <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-blue-400">
                <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-500"></div>
                <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-blue-100"></div>
                <div className="absolute bottom-0 w-full truncate text-center text-[12vmax] leading-none">
                  40%
                </div>
              </div>
            </div>

            <div className="h-auto flex-auto flex-col bg-yellow-400 text-white">
              GPU - 6000 rpm
              <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-blue-400">
                <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-60% to-white to-60% transition-transform duration-500"></div>
                <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-blue-100"></div>
                <div className="absolute bottom-0 w-full truncate text-center text-[12vmax] leading-none">
                  40%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-auto flex-wrap gap-2">
        <div className="flex-2 h-auto flex-col bg-yellow-400 text-white">
          <div>FAN CONTROL</div>

          <div>
            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-full flex-auto bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400"
            >
              Auto
            </button>
          </div>

          <div>
            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-full flex-auto bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400"
            >
              Max
            </button>
          </div>

          <div>
            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-full flex-auto bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400"
            >
              Custom
            </button>
          </div>

          <div className="invisible">
            <button className="focus:shadow-outline h-12 w-full bg-indigo-700 px-3 text-indigo-100 transition-colors duration-150 hover:bg-indigo-800">
              Large block button
            </button>
          </div>

          <div className="invisible">
            <button className="focus:shadow-outline h-12 w-full bg-indigo-700 px-3 text-indigo-100 transition-colors duration-150 hover:bg-indigo-800">
              Large block button
            </button>
          </div>
        </div>

        <div className="h-auto flex-1 flex-wrap bg-yellow-400 text-white">
          <div className="flex flex-wrap gap-10">
            <div className="h-auto flex-auto flex-col bg-yellow-400 text-white">
              CPU - 5882 rpm
              <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-blue-400">
                <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-500"></div>
                <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-blue-100"></div>
                <div className="absolute bottom-0 w-full truncate text-center text-[12vmax] leading-none">
                  40%
                </div>
              </div>
            </div>

            <div className="h-auto flex-auto flex-col bg-yellow-400 text-white">
              GPU - 6000 rpm
              <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-blue-400">
                <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-60% to-white to-60% transition-transform duration-500"></div>
                <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-blue-100"></div>
                <div className="absolute bottom-0 w-full truncate text-center text-[12vmax] leading-none">
                  40%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}
