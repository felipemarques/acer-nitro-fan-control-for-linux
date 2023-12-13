import React, { useEffect, useState } from "react";
import styles from "../assets/styles.module.css";
import stylesTitleBar from "../assets/title-bar.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import dynamic from "next/dynamic";
import { HomeV2 } from "./home-v2";

const MyLineChart = dynamic(() => import("../components/MyLineChart"), {
  ssr: false,
});

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

  const onClickMinimize = () => {
    if (window.ipc) window.ipc.send("minimize-window", true);
  };

  const onClickClose = () => {
    if (window.ipc) window.ipc.send("close-window", true);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Fan Control</title>
      </Head>

      <HomeV2 />
      {/*<div className={stylesTitleBar.titleBar}>*/}
      {/*  <div className={stylesTitleBar.dragContainer}></div>*/}

      {/*  <div className={stylesTitleBar.buttons}>*/}
      {/*    <button id="minimize-btn" type="button">*/}
      {/*      -*/}
      {/*    </button>*/}
      {/*    <button id="close-btn" type="button">*/}
      {/*      ✕*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="bg-gray-800">*/}
      {/*  <div*/}
      {/*    className={*/}
      {/*      stylesTitleBar.noDragWindow + " flex h-full flex-wrap gap-0 "*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <div className={ stylesTitleBar.dragWindow + "h-12 flex text-white"}></div>*/}

      {/*    <div*/}
      {/*      className={*/}
      {/*        stylesTitleBar.dragWindow +*/}
      {/*        " h-12 flex-auto bg-gray-800 justify-center text-center text-white"*/}
      {/*      }*/}
      {/*    ></div>*/}

      {/*    <div className="h-12 flex text-right text-white">*/}
      {/*      <Image*/}
      {/*        width="100px"*/}
      {/*        height="50px"*/}
      {/*        src="/Acer-Logo.png"*/}
      {/*        className={stylesTitleBar.dragWindow + ""}*/}
      {/*        style={{ marginLeft: "10px" }}*/}
      {/*      ></Image>*/}

      {/*      <Image*/}
      {/*        width="100px"*/}
      {/*        height="50px"*/}
      {/*        src="/acer-nitrosense.webp"*/}
      {/*        className={stylesTitleBar.dragWindow + ""}*/}
      {/*      ></Image>*/}

      {/*      <Image*/}
      {/*        width="180px"*/}
      {/*        height="100px"*/}
      {/*        src="/nvidia-geforce-gtx-logo.png"*/}
      {/*        className={stylesTitleBar.dragWindow + ""}*/}
      {/*      ></Image>*/}

      {/*      <button*/}
      {/*        type="button"*/}
      {/*        onClick={onClickMinimize}*/}
      {/*        className={*/}
      {/*          "dark:shadow-highlight/20 relative w-20 flex-auto bg-gray-500 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"*/}
      {/*        }*/}
      {/*      >*/}
      {/*        -*/}
      {/*      </button>*/}

      {/*      <button*/}
      {/*        type="button"*/}
      {/*        onClick={onClickClose}*/}
      {/*        className="dark:shadow-highlight/20 relative w-20 flex-auto bg-gray-500 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"*/}
      {/*      >*/}
      {/*        x*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="flex h-full flex-wrap gap-2">*/}
      {/*    <div className="w-60 flex-2 h-auto flex-col text-white">*/}
      {/*      <div>FAN CONTROL</div>*/}

      {/*      <div>*/}
      {/*        <button*/}
      {/*          type="button"*/}
      {/*          className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"*/}
      {/*        >*/}
      {/*          Auto*/}
      {/*        </button>*/}
      {/*      </div>*/}

      {/*      <div>*/}
      {/*        <button*/}
      {/*          type="button"*/}
      {/*          className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"*/}
      {/*        >*/}
      {/*          Max*/}
      {/*        </button>*/}
      {/*      </div>*/}

      {/*      <div>*/}
      {/*        <button*/}
      {/*          type="button"*/}
      {/*          className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"*/}
      {/*        >*/}
      {/*          Custom*/}
      {/*        </button>*/}
      {/*      </div>*/}

      {/*      <div className="invisible">*/}
      {/*        <button className="focus:shadow-outline h-12 w-full bg-indigo-700 px-3 text-indigo-100 transition-colors duration-150 hover:bg-indigo-800">*/}
      {/*          Large block button*/}
      {/*        </button>*/}
      {/*      </div>*/}

      {/*      <div className="invisible">*/}
      {/*        <button className="focus:shadow-outline h-12 w-full bg-indigo-700 px-3 text-indigo-100 transition-colors duration-150 hover:bg-indigo-800">*/}
      {/*          Large block button*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="h-auto flex-1 flex-wrap text-white">*/}
      {/*      <div className="flex flex-wrap gap-10">*/}
      {/*        <div className="h-auto flex-auto flex-col text-white">*/}
      {/*          <div>CPU</div>*/}

      {/*          <div>*/}
      {/*            <div className={styles.circleFan}>5882 RPM</div>*/}

      {/*            <Image*/}
      {/*              className={styles.fan + " ml-auto mr-auto"}*/}
      {/*              src="/fan3.png"*/}
      {/*              alt="fan"*/}
      {/*              width="256px"*/}
      {/*              height="256px"*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*        </div>*/}

      {/*        <div className="h-auto flex-auto flex-col text-white">*/}
      {/*          <div>GPU</div>*/}

      {/*          <div>*/}
      {/*            <div className={styles.circleFan}>6000 RPM</div>*/}

      {/*            <Image*/}
      {/*              className={styles.fan + " ml-auto mr-auto"}*/}
      {/*              src="/fan3.png"*/}
      {/*              alt="fan"*/}
      {/*              width="256px"*/}
      {/*              height="256px"*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="flex h-auto flex-wrap gap-2">*/}
      {/*    <div className="w-60 flex-2 h-auto flex-col text-white">*/}
      {/*      <div>POWER PLAN</div>*/}

      {/*      <div>*/}
      {/*        <button*/}
      {/*          type="button"*/}
      {/*          className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"*/}
      {/*        >*/}
      {/*          Power Save*/}
      {/*        </button>*/}
      {/*      </div>*/}

      {/*      <div>*/}
      {/*        <button*/}
      {/*          type="button"*/}
      {/*          className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"*/}
      {/*        >*/}
      {/*          Balance*/}
      {/*        </button>*/}
      {/*      </div>*/}

      {/*      <div>*/}
      {/*        <button*/}
      {/*          type="button"*/}
      {/*          className="dark:shadow-highlight/20 relative w-full flex-auto bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"*/}
      {/*        >*/}
      {/*          High-Performance*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="h-auto flex-1 flex-wrap bg-white">*/}
      {/*      <div className="w-full flex-auto h-auto flex-col text-white">*/}
      {/*        <MyLineChart chartID="cpu" graphLabel="CPU"></MyLineChart>*/}
      {/*        <MyLineChart chartID="gpu" graphLabel="GPU"></MyLineChart>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </React.Fragment>
  );
}
