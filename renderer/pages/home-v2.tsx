import { FanControlLabel } from "../components/ui/fan-control-label";
import { SelectFanControlButtons } from "../components/select-fan-control-buttons";
import { HStack } from "../components/ui/hstack";
import { Fans } from "../components/fans";

export function HomeV2() {
  return (
    <div className={"bg-zinc-800 h-screen text-white p-12"}>
      <div className="bg-zinc-900 rounded-md">
        <FanControlLabel />
        <HStack>
          <SelectFanControlButtons />
          <Fans />
        </HStack>
      </div>
    </div>
  );
}
