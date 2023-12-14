import { FanButton } from "./fan-button";
import { useState } from "react";
import { useFanSpeed, Speed } from "../store/use-fan-speed";


export function SelectFanControlButtons() {
  const { speed, setSpeed } = useFanSpeed();

  return (
    <div className="mt-6 p-4 space-y-8">
      <div className="space-y-4">
        <FanButton
          isActive={speed === Speed.AUTO}
          onClick={() => setSpeed(Speed.AUTO)}
        >
          Auto
        </FanButton>
        <FanButton
          isActive={speed === Speed.MAX}
          onClick={() => setSpeed(Speed.MAX)}
        >
          Max
        </FanButton>
        <FanButton
          isActive={speed === Speed.CUSTOM}
          onClick={() => setSpeed(Speed.CUSTOM)}
        >
          Custom
        </FanButton>
      </div>
    </div>
  );
}
