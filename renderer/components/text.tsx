import { cn } from "../lib/utils";

type BaseTextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  isActive?: boolean;
};

export function Text({ children, ...props }: Readonly<BaseTextProps>) {
  const { className, ...rest } = props;

  const color = props.isActive ? "text-orange-700" : "text-white";

  return (
    <p className={cn(color, className)} {...rest}>
      {children}
    </p>
  );
}
