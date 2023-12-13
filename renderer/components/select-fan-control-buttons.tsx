import { Fan } from "lucide-react";
import { HStack } from "./ui/hstack";
import { Text } from "./text";
import { useDisclosure } from "../hooks/use-disclosure";

export function SelectFanControlButtons() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div className="mt-6 p-4 space-y-8">
      <HStack className="space-x-2 items-center">
        <Fan size={32} />
        <Text>Auto</Text>
      </HStack>
      <HStack className="space-x-2 items-center">
        <Fan size={32} />
        <Text>Max</Text>
      </HStack>
      <HStack className="space-x-2 items-center">
        <Fan size={32} />
        <Text>Custom</Text>
      </HStack>
    </div>
  );
}
