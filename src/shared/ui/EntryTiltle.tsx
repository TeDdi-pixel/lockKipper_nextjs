import { Text } from "@/shared/ui/Text";
import React from "react";
import { FaLock } from "react-icons/fa6";

export const EntryTiltle = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center">
        <FaLock className="text-primary text-[44px]" />
        <Text tag="h1" className="text-primary sm:text-[44px] text-[33px]">
          Lock
          {""}
          <Text tag="span" className="font-bold">
            Kipper
          </Text>
        </Text>
      </div>
      <Text className="text-[21px] font-medium">{text}</Text>
    </div>
  );
};
