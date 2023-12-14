import { PanelLabel } from "~/entities/panel/components/panel-label";
import { HStack } from "~/components/ui";
import { SelectFanControlButtons } from "~/entities/panel/components/fan-control/select-fan-control-buttons";
import { Fans } from "~/entities/panel/components/fan-control/fans";

export function FanControl() {
  return (
    <>
      <PanelLabel>Fan Control</PanelLabel>
      <HStack>
        <SelectFanControlButtons />
        <Fans />
      </HStack>
    </>
  )
}