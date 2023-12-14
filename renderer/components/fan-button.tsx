import { Fan } from "lucide-react";
import { Text } from "./ui";
import { cn } from "../lib/utils";
import { MouseEvent } from "react";

export function FanButton({
  isActive,
  children: text,
  onClick,
}: Readonly<{
  isActive?: boolean;
  children: string;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}>) {
  const color = isActive ? "text-orange-700" : "text-white";
  const animation = isActive ? "animate-spin-slower" : "";

  return (
    <button className="flex items-center space-x-2" onClick={onClick}>
      <Fan size={32} className={cn(color, animation, "transition-all")} />
      <Text className={cn(color, "transition-all")}>{text}</Text>
    </button>
  );
}
