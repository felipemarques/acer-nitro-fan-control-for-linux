import { cn } from "~/lib/utils";

type BaseDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function PanelContainer({ children, ...props}: BaseDivProps) {
  const { className,  ...rest } = props;

  return <div className={cn('bg-zinc-900', className)} {...rest}>{children}</div>
}