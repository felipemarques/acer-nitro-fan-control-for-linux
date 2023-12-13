import { cn } from "../../lib/utils";

type BaseDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function HStack({ children, ...props }: Readonly<BaseDivProps>) {
  const { className, ...rest } = props;
  return (
    <div className={cn("flex", className)} {...rest}>
      {children}
    </div>
  );
}
