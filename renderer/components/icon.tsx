import { LucideProps, icons } from "lucide-react";

export type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon(props: IconProps) {
  const { name, ...rest } = props;
  const LucideIcon = icons[name];

  return <LucideIcon {...rest} />;
}
