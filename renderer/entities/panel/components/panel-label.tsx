import { Text } from "~/components/ui";

export function PanelLabel({ children: text }: { children: string}) {
  return (
    <div className={"bg-zinc-600 w-72 rounded-br-full p-2"}>
      <Text>{text}</Text>
    </div>
  );
}
