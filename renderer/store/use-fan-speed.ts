import { create } from "zustand";

export enum Speed {
  AUTO = "AUTO",
  MAX = "MAX",
  CUSTOM = "CUSTOM",
}

interface Store {
  speed: Speed;
  setSpeed: (speed: Speed) => void;
}
export const useFanSpeed = create<Store>((set) => ({
  speed: Speed.AUTO,
  setSpeed: (speed: Speed) => set({ speed }),
}));
