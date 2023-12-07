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
          <div>POWER PLAN</div>

          <div>
            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-full flex-auto bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400"
            >
              Power Save
            </button>
          </div>

          <div>
            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-full flex-auto bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400"
            >
              Balance
            </button>
          </div>

          <div>
            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-full flex-auto bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400"
            >
              High-Performance
            </button>
          </div>

        </div>

        <div className="h-auto flex-1 flex-wrap bg-yellow-400 text-white">
          <div className="flex flex-wrap gap-10">
            <div className="h-auto flex-auto flex-col bg-yellow-400 text-white">
              
            <div className="py-12 px-4">
        <div className="lg:max-w-[356px] md:max-w-[516px] max-w-[343px] mx-auto">
          <div className="mx-auto bg-white px-3 py-4 rounded">
            <div>
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%20813077.png"
                className="mx-auto"
              />
            </div>
            <div className="lg:block hidden">
              <div className="flex justify-between items-center gap-x-4 px-8">
                <div aria-label="one">
                  <div className="flex gap-2 items-center">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#EF4444" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Poor
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#FACC15" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Fair
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#BEF264" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Satisfactory
                    </p>
                  </div>
                </div>
                <div aria-label="two">
                  <div className="flex items-center gap-2">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#14B8A6" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Good
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#22C55E" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Better
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#15803D" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Exceptional
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden block">
              <div className="flex flex-wrap justify-between gap-3 items-center px-8">
                <div className="flex gap-2 items-center">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#EF4444" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Poor
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#FACC15" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Fair
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#BEF264" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Satisfactory
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#14B8A6" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Good
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#22C55E" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Better
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#15803D" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Exceptional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            </div>

            <div className="h-auto flex-auto flex-col bg-yellow-400 text-white">
              
            <div className="px-4 py-12">
        <div className="rounded relative">
          <div className="rounded-full bg-indigo-200 w-[260px] h-[260px] relative flex justify-center items-center mx-auto">
            <svg
              className="absolute top-[2px] right-0"
              width={260}
              height={260}
              viewBox="0 0 260 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M130 253.5C130 257.09 127.088 260.017 123.502 259.838C99.0358 258.613 75.3636 250.496 55.2493 236.359C33.3589 220.975 16.7488 199.21 7.6855 174.036C-1.37777 148.862 -2.45265 121.504 4.60754 95.6965C11.6677 69.8888 26.5191 46.8882 47.1349 29.8333C67.7507 12.7784 93.1268 2.49999 119.8 0.400745C146.474 -1.6985 173.145 4.48364 196.175 18.1035C219.205 31.7235 237.472 52.1177 248.482 76.5032C258.6 98.9101 262.137 123.684 258.755 147.946C258.26 151.502 254.839 153.814 251.312 153.142V153.142C247.786 152.469 245.492 149.066 245.968 145.508C248.861 123.878 245.65 101.821 236.634 81.8528C226.725 59.9059 210.285 41.5511 189.558 29.2932C168.831 17.0353 144.826 11.4713 120.82 13.3607C96.8142 15.25 73.9757 24.5005 55.4214 39.8499C36.8672 55.1994 23.501 75.8999 17.1468 99.1268C10.7926 122.354 11.76 146.976 19.9169 169.632C28.0739 192.289 43.023 211.877 62.7244 225.724C80.6494 238.321 101.714 245.608 123.503 246.82C127.087 247.019 130 249.91 130 253.5V253.5Z"
                fill="#4338CA"
              />
            </svg>
            <div className="rounded-full bg-white w-[237px] h-[237px]" />
          </div>
          <p className="absolute mx-auto inset-x-0 my-auto inset-y-[140px] text-base  text-gray-800 text-center font-bold">
            78%
          </p>
        </div>
      </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}
