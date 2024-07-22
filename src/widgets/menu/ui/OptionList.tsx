import { Text } from "@/shared/ui/Text";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MenuItem } from "../types/types";

type Props = {
  item: MenuItem;
  isActive: boolean;
};

export const OptionList = ({ isActive, item }: Props) => {
  const pathname = usePathname();
  return (
    <ul
      className={`ml-[45px] rounded-bl-xl rounded-tl-xl ease bg-[#11508f] overflow-hidden ${
        isActive ? "max-h-[500px]" : "max-h-0"
      }`}
      style={{ transition: "max-height ease-in-out 0.5s" }}
    >
      {item?.options?.map((option) => (
        <li
          key={option.id}
          className="hover:pl-[23px] pl-[17.5px] py-[7px] duration-[.2s] transition-[padding] cursor-pointer"
        >
          <Link
            href={option.pathname ?? pathname}
            className="text-accent font-bold"
          >
            <Text>{option.name}</Text>
          </Link>
        </li>
      ))}
    </ul>
  );
};


