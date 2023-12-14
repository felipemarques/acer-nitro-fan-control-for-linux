import { MouseEvent } from "react";
import { Icon, IconName } from "~/components/icon";
import { cn } from "~/lib/utils";
import { Text } from "~/components/ui";

export function SelectButton({ isActive, children: text, onClick, icon, classNames }: {
  isActive?: boolean;
  children: string;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  icon: {
   name: IconName;
   size?: number;
  }
  classNames?: {
    button?: string;
    icon?: string;
    text?: string;
  }
}) {
  const color = isActive ? "text-orange-700" : "text-white";
  const animation = isActive ? "animate-spin-slower" : "";

  return (
    <button className={cn("flex items-center space-x-2", classNames?.button)} onClick={onClick}>
      <Icon name={icon.name} size={icon?.size} className={cn(color, animation, "transition-all", classNames?.icon)} />
      <Text className={cn(color, "transition-all", classNames?.text)}>{text}</Text>
    </button>
  );
}