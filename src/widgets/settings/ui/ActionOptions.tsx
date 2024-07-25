import React from "react";
import { actionOptions } from "../config/actionOptions";
import { Text } from "@/shared/ui/Text";

export const ActionOptions = () => {
  return (
    <ul className="py-[12px] flex flex-col gap-[8px]">
      {actionOptions.map((option) => {
        return (
          <li
            key={option.id}
            className="flex items-center text-primary-foreground py-[6px] px-[14px] cursor-pointer gap-[5px] hover:bg-foreground"
          >
            <Text className="text-[18px]">{option.icon} </Text>
            <Text>{option.name} </Text>
          </li>
        );
      })}
    </ul>
  );
};
