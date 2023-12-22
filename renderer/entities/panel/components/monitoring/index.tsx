import { PanelLabel } from "~/entities/panel/components/panel-label";
import MyLineChart from "~/components/MyLineChart";
import { HStack } from "~/components/ui";
import CpuGraph from "~/components/cpu-graph";
import CpuGpuChart from "~/components/cpu-graph";
import { useEffect, useState } from "react";

export function Monitoring() {
  const [cpuData, setCpuData] = useState([]);
  const [gpuData, setGpuData] = useState([]);

  // Fetch CPU and GPU data and update state
  useEffect(() => {
    // Fetch or generate CPU and GPU data and update setCpuData and setGpuData
    // Example:
    const fetchUsageData = async () => {
      // Simulated data
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