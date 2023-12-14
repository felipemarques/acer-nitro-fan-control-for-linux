import { HStack, Text } from "~/components/ui";
import { useDisclosure } from "~/hooks/use-disclosure";
import { useState } from "react";
import { selectedColorMode } from "~/entities/panel/components/power-plan/utils/selected-color-mode";
import { cn } from "~/lib/utils";
import { Show } from "~/components/show";
import { Ac } from "~/entities/panel/components/power-plan/ac";
import { Battery } from "~/entities/panel/components/power-plan/battery";

export enum ModeActive {
  AC = 'AC',
  Battery = 'Battery',
}

export function Mode() {
  const [mode, setMode] = useState(ModeActive.AC);

  return (
    <>
      <Text>Mode</Text>

      <HStack className={'justify-center space-x-1'}>
        <button
          className={cn(selectedColorMode(mode, ModeActive.AC), 'w-32 rounded-tr-2xl transition-colors delay-75')}
          onClick={() => setMode(ModeActive.AC)}
        >
          <Text className={'text-center'}>AC</Text>
        </button>
        <button
          className={cn(selectedColorMode(mode, ModeActive.Battery), 'w-32 rounded-tl-2xl transition-colors delay-75')}
          onClick={() => setMode(ModeActive.Battery)}
        >
          <Text className={'text-center'}>Battery</Text>
        </button>
      </HStack>

      <Show when={mode === ModeActive.AC} otherwise={<Battery/>}>
        <Ac />
      </Show>
    </>
  )
}