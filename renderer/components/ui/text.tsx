import { cn } from "../../lib/utils";

type BaseTextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export function Text({ children, ...props }: Readonly<BaseTextProps>) {
  const { className, ...rest } = props;

  return (
    <p className={cn("text-white", className)} {...rest}>
      {children}
    </p>
  );
}
