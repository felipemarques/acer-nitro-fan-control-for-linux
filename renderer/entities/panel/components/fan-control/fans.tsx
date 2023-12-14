import Image from "next/image";
import { useFanSpeed } from "~/store/use-fan-speed";
import { HStack, Text, VStack } from "~/components/ui";

export function Fans() {
  const { speed } = useFanSpeed();

  function getAnimationBasedOnSpeed() {
    switch (speed) {
      case "AUTO":
      case "CUSTOM":
        return "animate-spin-slow";
      case "MAX":
        return "animate-spin";
    }
  }

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
          className={getAnimationBasedOnSpeed()}
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
          className={getAnimationBasedOnSpeed()}
        />
        <Text>GPU</Text>
      </VStack>
    </HStack>
  );
}
