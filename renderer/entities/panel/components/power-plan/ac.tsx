import { HStack, Text, VStack } from "~/components/ui";
import { Battery, Zap } from "lucide-react";
import { SelectButton } from "~/entities/panel/components/select-button";
import { useState } from "react";
import { acModeIconSize } from "~/entities/panel/components/fan-control/utils/ac-mode-icon-size";

export enum AcMode {
  PowerSaver = 'Power Saver',
  Balance = 'Balance',
  HighPerformance = 'High Performance'
}

export function Ac() {
  const [mode, setMode] = useState<AcMode>(AcMode.PowerSaver)

  return (
    <VStack className={'mt-4 space-y-6'}>
      <HStack>
        <SelectButton
          icon={{
            name: 'Zap',
            size: acModeIconSize(mode, AcMode.PowerSaver)
          }}
          isActive={mode === AcMode.PowerSaver}
          onClick={() => setMode(AcMode.PowerSaver)}
          classNames={{
            icon: 'animate-none'
          }}
        >
          Power Saver
        </SelectButton>
      </HStack>
      <HStack>
        <SelectButton
          icon={{
            name: 'Zap',
            size: acModeIconSize(mode, AcMode.Balance)
          }}
          isActive={mode === AcMode.Balance}
          onClick={() => setMode(AcMode.Balance)}
          classNames={{
            icon: 'animate-none'
          }}
        >
          Balance
        </SelectButton>
      </HStack>
      <HStack>
        <SelectButton
          icon={{
            name: 'Zap',
            size: acModeIconSize(mode, AcMode.HighPerformance)
          }}
          isActive={mode === AcMode.HighPerformance}
          onClick={() => setMode(AcMode.HighPerformance)}
          classNames={{
            icon: 'animate-none'
          }}
        >
          High-Performance
        </SelectButton>
      </HStack>
    </VStack>
  )
}