import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import dynamic from 'next/dynamic'

const MyLineChart = dynamic(() => import('../components/MyLineChart'), { ssr: false });

export default function HomePage() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Aumentar o ângulo de rotação a cada meio segundo
      //setRotation(prevRotation => prevRotation + 10);
    }, 50);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // O segundo argumento [] garante que o useEffect será executado apenas uma vez, sem dependências

  return (
    <React.Fragment>
      <Head>
        <title>Fan Control</title>
      </Head>

      <div className="bg-gray-800">
        <div className="flex h-full flex-wrap gap-0">
          <div className="h-auto flex text-white">
            <Image width="150px" height="100%" src="/Acer-Logo.png"></Image>
          </div>

          <div className="h-auto flex-auto bg-gray-800 text-center text-white">
            <Image
              width="200px"
              height="100%"
              src="/acer-nitrosense.webp"
            ></Image>
          </div>

          <div className="h-auto flex text-right text-white">
            <Image
              width="200px"
              height="100%"
              src="/nvidia-geforce-rtx.webp"
            ></Image>

            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-20 flex-auto bg-gray-500 px-3 py-1.5 text-xs font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"
            >
              -
            </button>

            <button
              type="button"
              className="dark:shadow-highlight/20 relative w-20 flex-auto bg-gray-500 px-3 py-1.5 text-xs font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"
            >
              x
            </button>
          </div>
        </div>

        <div className="flex h-full flex-wrap gap-2">
          <div className="w-60 flex-2 h-auto flex-col text-white">
            <div>FAN CONTROL</div>

            <div>
              <button
                type="button"
                className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"
              >
                Auto
              </button>
            </div>

            <div>
              <button
                type="button"
                className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"
              >
                Max
              </button>
            </div>

            <div>
              <button
                type="button"
                className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"
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

          <div className="h-auto flex-1 flex-wrap text-white">
            <div className="flex flex-wrap gap-10">
              <div className="h-auto flex-auto flex-col text-white">
                
                <div>CPU</div>

                <div>

                  <div className={styles.circleFan}>5882 RPM</div>

                  <Image
                    className={styles.fan + " ml-auto mr-auto"}
                    src="/fan3.png"
                    alt="fan"
                    width="256px"
                    height="256px"
                  />

                </div>
                
              </div>

              <div className="h-auto flex-auto flex-col text-white">
                <div>GPU</div>

                <div>

                  <div className={styles.circleFan}>6000 RPM</div>

                  <Image
                    className={styles.fan + " ml-auto mr-auto"}
                    src="/fan3.png"
                    alt="fan"
                    width="256px"
                    height="256px"
                  />

                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="flex h-auto flex-wrap gap-2">
          <div className="w-60 flex-2 h-auto flex-col text-white">
            <div>POWER PLAN</div>

            <div>
              <button
                type="button"
                className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"
              >
                Power Save
              </button>
            </div>

            <div>
              <button
                type="button"
                className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"
              >
                Balance
              </button>
            </div>

            <div>
              <button
                type="button"
                className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"
              >
                High-Performance
              </button>
            </div>
          </div>

          <div className="h-auto flex-1 flex-wrap bg-white">
            <div className="w-full flex-auto h-auto flex-col text-white">
              
              <MyLineChart chartID="cpu" graphLabel="CPU"></MyLineChart>
              <MyLineChart chartID="gpu" graphLabel="GPU"></MyLineChart>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
