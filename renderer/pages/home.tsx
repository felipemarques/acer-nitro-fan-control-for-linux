import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import MyChart from "./components/MyChart";
import BrushChart from "./components/BrushChart";
import BrushChart2 from "./components/BrushChart2";


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
              <BrushChart2 mydata={[[1486778400000,30],[1486864800000,61],[1486951200000,74],[1487037600000,46],[1487124000000,52],[1487210400000,41],[1487296800000,89],[1487383200000,61],[1487469600000,62],[1487556000000,45],[1487642400000,36],[1487728800000,79],[1487815200000,84],[1487901600000,57],[1487988000000,44],[1488074400000,45],[1488160800000,41],[1488247200000,49],[1488333600000,36],[1488420000000,79],[1488506400000,62],[1488592800000,81],[1488679200000,74],[1488765600000,34],[1488852000000,62],[1488938400000,37],[1489024800000,82],[1489111200000,58],[1489197600000,58],[1489284000000,57],[1489370400000,44],[1489456800000,30],[1489543200000,31],[1489629600000,90],[1489716000000,85],[1489802400000,77],[1489888800000,64],[1489975200000,76],[1490061600000,68],[1490148000000,50],[1490234400000,52],[1490320800000,46],[1490407200000,51],[1490493600000,69],[1490580000000,52],[1490666400000,33],[1490752800000,62],[1490839200000,39],[1490925600000,57],[1491012000000,50],[1491098400000,41],[1491184800000,33],[1491271200000,90],[1491357600000,63],[1491444000000,35],[1491530400000,90],[1491616800000,56],[1491703200000,72],[1491789600000,41],[1491876000000,63],[1491962400000,90],[1492048800000,41],[1492135200000,71],[1492221600000,54],[1492308000000,56],[1492394400000,75],[1492480800000,40],[1492567200000,79],[1492653600000,79],[1492740000000,35],[1492826400000,31],[1492912800000,38],[1492999200000,68],[1493085600000,53],[1493172000000,45],[1493258400000,60],[1493344800000,61],[1493431200000,36],[1493517600000,89],[1493604000000,51],[1493690400000,76],[1493776800000,46],[1493863200000,70],[1493949600000,85],[1494036000000,58],[1494122400000,56],[1494208800000,86],[1494295200000,58],[1494381600000,89],[1494468000000,49],[1494554400000,78],[1494640800000,82],[1494727200000,75],[1494813600000,64],[1494900000000,80],[1494986400000,62],[1495072800000,48],[1495159200000,50],[1495245600000,48],[1495332000000,57],[1495418400000,64],[1495504800000,69],[1495591200000,33],[1495677600000,59],[1495764000000,57],[1495850400000,30],[1495936800000,72],[1496023200000,53],[1496109600000,57],[1496196000000,87],[1496282400000,37],[1496368800000,56],[1496455200000,47],[1496541600000,55],[1496628000000,44],[1496714400000,52],[1496800800000,73],[1496887200000,87],[1496973600000,31],[1497060000000,59],[1497146400000,80],[1497232800000,62],[1497319200000,37],[1497405600000,54],[1497492000000,37],[1497578400000,79],[1497664800000,53],[1497751200000,34],[1497837600000,66],[1497924000000,50],[1498010400000,45],[1498096800000,53],[1498183200000,49],[1498269600000,67],[1498356000000,42],[1498442400000,47],[1498528800000,90],[1498615200000,41],[1498701600000,70],[1498788000000,61],[1498874400000,77],[1498960800000,37],[1499047200000,51],[1499133600000,43],[1499220000000,48],[1499306400000,40],[1499392800000,88],[1499479200000,74],[1499565600000,65],[1499652000000,61],[1499738400000,59],[1499824800000,52],[1499911200000,47],[1499997600000,53],[1500084000000,54],[1500170400000,56],[1500256800000,49],[1500343200000,51],[1500429600000,36],[1500516000000,74],[1500602400000,54],[1500688800000,30],[1500775200000,51],[1500861600000,62],[1500948000000,41],[1501034400000,83],[1501120800000,85],[1501207200000,88],[1501293600000,78],[1501380000000,44],[1501466400000,61],[1501552800000,42],[1501639200000,83],[1501725600000,79],[1501812000000,90],[1501898400000,50],[1501984800000,68],[1502071200000,71],[1502157600000,84],[1502244000000,37],[1502330400000,71],[1502416800000,90],[1502503200000,89],[1502589600000,37],[1502676000000,52]]}></BrushChart2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
