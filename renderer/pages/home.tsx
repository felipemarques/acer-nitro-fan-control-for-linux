import React, { useEffect, useState, useRef } from "react";
import styles from "../assets/styles.module.css";
import stylesTitleBar from "../assets/title-bar.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import dynamic from "next/dynamic";

const MyLineChart = dynamic(() => import("../components/MyLineChart"), {
  ssr: false,
});

export default function HomePage() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {

    window.ipc.on('graphics-stats', (event) => {
      console.log('Mensagem recebida no processo de renderização:', event);
    });

  }, []);

  const socketRef = useRef(null);

  useEffect(() => {
    // Cria um novo WebSocket apenas se não existir
    if (!socketRef.current) {
      socketRef.current = new WebSocket('ws://localhost:7071');

      // Ouvir eventos de conexão
      socketRef.current.addEventListener('open', (event) => {
        console.log('Conectado ao servidor WebSocket');

        // Enviar mensagens para o servidor após a conexão ser estabelecida
        //socketRef.current.send('Olá, servidor WebSocket!');
      });

      // Ouvir mensagens do servidor
      socketRef.current.addEventListener('message', (event) => {
        /*
         {
            "pid":6381,
            "config":"Acer Nitro AN515-51",
            "readonly":false,
            "temperature":65.94,
            "fans":[
                {"name":"CPU fan","automode":false,"critical":false,"current_speed":85.97,"target_speed":100,"speed_steps":6122},
                {
                  "name":"GPU fan",
                  "automode":false,
                  "critical":false,
                  "current_speed":94.23,
                  "target_speed":100,
                  "speed_steps":6122
                }
             ]
          }
        */
        const nbfc = JSON.parse(event.data);

        // setData(prevData => [
        //   ...prevData.slice(-50), 
        //   [new Date().getTime(), nbfc.temperature]
        // ]);

      });
    }

    // Cleanup ao desmontar o componente
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

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

      <div className="bg-gray-800">
        <div
          className={
            stylesTitleBar.noDragWindow + " flex h-full flex-wrap gap-0 "
          }
        >
          <div style={{ marginLeft: "20px" }} className={ stylesTitleBar.dragWindow + "h-12 flex text-white"}>
          <Image
              width="100px"
              height="50px"
              src="/Acer-Logo.png"
              className={stylesTitleBar.dragWindow + ""}
            ></Image>
          </div>

          <div
            className={
              stylesTitleBar.dragWindow +
              " h-12 flex-auto bg-gray-800 justify-center text-center text-white"
            }
          ></div>

          <div className="h-12 flex text-right text-white">

            <Image
              width="180px"
              height="100px"
              src="/nvidia-geforce-gtx-logo.png"
              className={stylesTitleBar.dragWindow + ""}
            ></Image>

            <button
              type="button"
              onClick={onClickMinimize}
              className={
                "dark:shadow-highlight/20 relative w-20 flex-auto bg-gray-500 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"
              }
            >
              -
            </button>

            <button
              type="button"
              onClick={onClickClose}
              className="dark:shadow-highlight/20 relative w-20 flex-auto bg-gray-500 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-gray-400"
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
            <div className="flex flex-wrap">
              <div className="bg-gray-600 h-auto flex-auto text-white">

                <div>
                  <div className={styles.circleFan}>
                    <small>CPU</small>
                    <p>6000</p>
                    <small>RPM</small>
                  </div>

                  <Image
                    className={styles.fan + " ml-auto mr-auto"}
                    src="/fan3.png"
                    alt="fan"
                    width="356px"
                    height="356px"
                  />
                </div>
              </div>

              <div className="bg-gray-700 h-auto flex-auto text-white">

                <div>
                  <div className={styles.circleFan}>
                    <small>GPU</small>
                    <p>6000</p>
                    <small>RPM</small>
                  </div>

                  <Image
                    className={styles.fan + " ml-auto mr-auto"}
                    src="/fan3.png"
                    alt="fan"
                    width="356px"
                    height="356px"
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
