import { Text } from "@/shared/ui/Text";
import React from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

export const FiltersHeader = () => {
  return (
    <div className="flex items-center justify-between py-[8.4px] px-[17.5px] border-b border-border text-primary-foreground">
      <Text tag="h5" className="font-bold uppercase">
        Filters
      </Text>
      <HiOutlineQuestionMarkCircle
        style={{ fontSize: "18px", cursor: "pointer" }}
      />
    </div>
  );
};
