import Link from "next/link";
import React from "react";
import { MenuItem } from "../types/types";
import { Text } from "@/shared/ui/Text";
import { usePathname } from "next/navigation";

type Props = {
  isActive: boolean;
  item: MenuItem;
  handleItemClick: (id: number) => void;
};

export const ListItem = ({ isActive, item, handleItemClick }: Props) => {
  const pathname = usePathname();
  
  return (
    <li
      className={`${
        isActive ? "pl-[15px]" : ""
      } hover:pl-[15px] py-[7px] pl-[7px] rounded-tl-xl rounded-bl-xl pr-[14px] ml-[7px] select-none cursor-pointer`}
      style={{
        transition: "padding ease 0.2s, background-color ease-in-out 0.3s",
      }}
    >
      <Link
        href={item.pathname ?? pathname}
        className="text-accent flex items-center gap-[5px] cursor-pointer"
        onClick={() => handleItemClick(item.id)}
      >
        <Text tag="span" className="text-[18px]">
          {item.icon}
        </Text>
        <Text className="font-bold">{item.name}</Text>
      </Link>
    </li>
  );
};
