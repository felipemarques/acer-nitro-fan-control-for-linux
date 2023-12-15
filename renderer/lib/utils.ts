import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  const customTwMerge = extendTailwindMerge({
    extend: {
      classGroups: {
        animate: ["animate-spin-slow", "animate-spin-slower"],
      },
    },
  });

  return customTwMerge(clsx(inputs));
}
