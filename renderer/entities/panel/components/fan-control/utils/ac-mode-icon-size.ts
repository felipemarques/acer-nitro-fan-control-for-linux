import { ModeActive } from "~/entities/panel/components/power-plan/mode";
import { AcMode } from "~/entities/panel/components/power-plan/ac";

export function acModeIconSize(modeActive: AcMode, modeToCompare: AcMode) {
  return modeActive === modeToCompare ? 32 : 26;
}