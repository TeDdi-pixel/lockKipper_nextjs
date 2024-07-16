import { Text } from "@/shared/ui/Text";
import React from "react";
import { FaLock } from "react-icons/fa6";

const EntryTiltle = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center">
        <FaLock className="text-primary text-[44px]" />
        <Text tag="h1" className="text-primary text-[44px]">
          Lock
          {""}
          <span>
            <strong>Kipper</strong>
          </span>
        </Text>
      </div>
      <Text className="text-[21px] font-medium">Log in</Text>
    </div>
  );
};

export default EntryTiltle;
