import { PanelLabel, HStack, VStack } from "../components/ui/";
import { PanelContainer } from "~/entities/panel/components/panel-container";
import { SelectFanControlButtons } from "~/entities/panel/components/fan-control/select-fan-control-buttons";
import { Fans } from "~/entities/panel/components/fan-control/fans";
import { Mode } from "~/entities/panel/components/power-plan/mode";
import { FanControl } from "~/entities/panel/components/fan-control";
import { PowerPlan } from "~/entities/panel/components/power-plan";

export function HomeV2() {
  return (
    <div className={"bg-zinc-800 h-screen text-white p-12 space-y-12"}>
      <PanelContainer>
        <FanControl />
      </PanelContainer>
      <HStack>
        <PanelContainer>
          <PowerPlan />
        </PanelContainer>
        <PanelContainer>
          {/*<PowerPlan />*/}
        </PanelContainer>
      </HStack>
    </div>
  );
}
