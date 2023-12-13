import { SelectFanControlButtons } from "../components/select-fan-control-buttons";
import { FanControlLabel } from "../components/ui/fan-control-label";

export function HomeV2() {
  return (
    <div className={"bg-zinc-800 h-screen text-white p-12"}>
      <div className="bg-zinc-900">
        <FanControlLabel />
        <SelectFanControlButtons />
      </div>
    </div>
  );
}
