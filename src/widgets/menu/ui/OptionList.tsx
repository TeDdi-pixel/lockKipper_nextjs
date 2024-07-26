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
      className={`rounded-tr-xl rounded-br-xl ease bg-[#11508f] overflow-hidden ${
        isActive ? "max-h-[500px]" : "max-h-0"
      } relative`}
      style={{ transition: "max-height cubic-bezier(1, 1, 1, 1) 0.3s" }}
    >
      {item?.options?.map((option) => (
        <li
          key={option.id}
          className={`${
            isActive ? "translate-x-[40px]" : "translate-x-[30px]"
          } hover:pl-[23px] pl-[17.5px] py-[7px] duration-[.2s] transition-[padding] cursor-pointer`}
          style={{ transition: "transform ease 0.3s, padding ease 0.2s" }}
        >
          <Link
            href={option.pathname ?? pathname}
            className="text-accent font-bold hover:text-accent-foreground transition-colors duration-200"
          >
            <Text>{option.name}</Text>
          </Link>
        </li>
      ))}
    </ul>
  );
};
