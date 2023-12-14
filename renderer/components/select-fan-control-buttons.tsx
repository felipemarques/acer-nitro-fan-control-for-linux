import { FanButton } from "./fan-button";
import { useState } from "react";

enum FanControlMode {
  Auto,
  Max,
  Custom,
}

export function SelectFanControlButtons() {
  const [fanControlMode, setFanControlMode] = useState(FanControlMode.Auto);

  return (
    <div className="mt-6 p-4 space-y-8">
      <div className="space-y-4">
        <FanButton
          isActive={fanControlMode === FanControlMode.Auto}
          onClick={() => setFanControlMode(FanControlMode.Auto)}
        >
          Auto
        </FanButton>
        <FanButton
          isActive={fanControlMode === FanControlMode.Max}
          onClick={() => setFanControlMode(FanControlMode.Max)}
        >
          Max
        </FanButton>
        <FanButton
          isActive={fanControlMode === FanControlMode.Custom}
          onClick={() => setFanControlMode(FanControlMode.Custom)}
        >
          Custom
        </FanButton>
      </div>
    </div>
  );
}
