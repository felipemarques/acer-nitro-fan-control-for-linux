import Image from "next/image";
import { HStack, VStack } from "./ui";
import { Text } from "./ui/text";

export function Fans() {
  return (
    <HStack className="flex-1 justify-center">
      <VStack className="relative space-y-2 items-center">
        <Text className="absolute top-[110px] font-bold right-[115px] z-50">
          500
        </Text>
        <Text className="absolute top-32 font-bold right-28 z-50 text-sm">
          RPM
        </Text>
        <Image
          src={"/fan3.png"}
          width={256}
          height={256}
          alt="fan"
          className="animate-spin-slow"
        />
        <Text>CPU</Text>
      </VStack>
      <VStack className="relative space-y-2 items-center">
        <Text className="absolute top-[110px] font-bold right-[115px] z-50">
          500
        </Text>
        <Text className="absolute top-32 font-bold right-28 z-50 text-sm">
          RPM
        </Text>
        <Image
          src={"/fan3.png"}
          width={256}
          height={256}
          alt="fan"
          className="animate-spin-slow"
        />
        <Text>GPU</Text>
      </VStack>
    </HStack>
  );
}
