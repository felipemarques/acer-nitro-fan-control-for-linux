import { FanButton } from "./fan-button";
import { Speed, useFanSpeed } from "~/store/use-fan-speed";
import { SelectButton } from "~/entities/panel/components/select-button";


export function SelectFanControlButtons() {
  const { speed, setSpeed } = useFanSpeed();

  return (
    <div className="mt-6 p-4 space-y-8">
      <div className="space-y-4">
        <SelectButton
          isActive={speed === Speed.AUTO}
          onClick={() => setSpeed(Speed.AUTO)}
          icon={{
            name: 'Fan'
          }}
        >
          Auto
        </SelectButton>
        <SelectButton
          isActive={speed === Speed.MAX}
          onClick={() => setSpeed(Speed.MAX)}
          icon={{
            name: 'Fan'
          }}
        >
          Max
        </SelectButton>
        <SelectButton
          isActive={speed === Speed.CUSTOM}
          onClick={() => setSpeed(Speed.CUSTOM)}
          icon={{
            name: 'Fan'
          }}
        >
          Custom
        </SelectButton>
      </div>
    </div>
  );
}
