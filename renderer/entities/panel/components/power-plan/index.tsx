import { PanelLabel } from "~/entities/panel/components/panel-label";
import { Mode } from "~/entities/panel/components/power-plan/mode";
import { VStack } from "~/components/ui";

export function PowerPlan() {
  return (
    <>
      <PanelLabel>Power Plan</PanelLabel>
      <VStack className={'p-4'}>
        <Mode />
      </VStack>
    </>
  )
}