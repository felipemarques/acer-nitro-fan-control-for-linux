import { PanelLabel } from "~/entities/panel/components/panel-label";
import MyLineChart from "~/components/MyLineChart";
import { HStack } from "~/components/ui";
import CpuGraph from "~/components/cpu-graph";
import CpuGpuChart from "~/components/cpu-graph";
import { useEffect, useState } from "react";

export function Monitoring() {
  const [cpuData, setCpuData] = useState([]);
  const [gpuData, setGpuData] = useState([]);

  useEffect(() => {
    const fetchUsageData = async () => {
      const newCpuData = Array.from({ length: 10 }, () => Math.random() * 100);
      const newGpuData = Array.from({ length: 10 }, () => Math.random() * 100);

      setCpuData(newCpuData);
      setGpuData(newGpuData);
    };

    fetchUsageData();
  }, []);

  return (
    <>
      <PanelLabel>Monitoring</PanelLabel>
      <HStack>
        <MyLineChart />
      </HStack>
    </>
  )
}