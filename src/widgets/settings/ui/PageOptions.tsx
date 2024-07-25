import { Text } from "@/shared/ui/Text";
import Link from "next/link";
import React from "react";
import { pageOptions } from "../config/pageOptions";

export const PageOptions = () => {
  return (
    <ul className="border-b border-border py-[12px] flex flex-col gap-[8px]">
      {pageOptions.map((option) => {
        return (
          <li key={option.id} className="py-[6px] px-[14px] text-primary-foreground">
            <Link
              href={option.pathname}
              className="flex items-center gap-[5px]"
            >
              <Text className="text-[18px]">{option.icon}</Text>
              <Text>{option.name}</Text>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
