import { ModeActive } from "~/entities/panel/components/power-plan/mode";

export function selectedColorMode(mode: ModeActive, modeToCompare: ModeActive) {
  return mode === modeToCompare? "bg-zinc-800" : "bg-zinc-700";
}