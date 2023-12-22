import { PanelLabel, HStack, VStack } from "../components/ui/";
import { PanelContainer } from "~/entities/panel/components/panel-container";
import { SelectFanControlButtons } from "~/entities/panel/components/fan-control/select-fan-control-buttons";
import { Fans } from "~/entities/panel/components/fan-control/fans";
import { Mode } from "~/entities/panel/components/power-plan/mode";
import { FanControl } from "~/entities/panel/components/fan-control";
import { PowerPlan } from "~/entities/panel/components/power-plan";
import { Monitoring } from "~/entities/panel/components/monitoring";

export function HomeV2() {
  return (
    <div className={"bg-zinc-800 h-screen text-white p-12 space-y-12"}>
      <PanelContainer>
        <FanControl />
      </PanelContainer>
      <HStack className={'space-x-3'}>
        <PanelContainer>
          <PowerPlan />
        </PanelContainer>
        <PanelContainer>
          <PanelContainer>
            <Monitoring />
          </PanelContainer>
        </PanelContainer>
      </HStack>
    </div>
  );
}
