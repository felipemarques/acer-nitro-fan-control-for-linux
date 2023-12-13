import { cn } from "../../lib/utils";

type BaseDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function VStack({ children, ...props }: Readonly<BaseDivProps>) {
  const { className, ...rest } = props;
  return (
    <div className={cn("flex flex-col", className)} {...rest}>
      {children}
    </div>
  );
}
