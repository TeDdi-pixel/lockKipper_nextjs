"use client";

import { TypeFilterListData } from "@/widgets/filters/types/types";
import React, { useState } from "react";
import { Text } from "./Text";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  data: TypeFilterListData[];
  title: string;
  status?: boolean;
};

const ToggleList = ({ data, title, status = true }: Props) => {
  const [active, setActive] = useState<boolean>(status);
  const pathname = usePathname();

  const handleList = () => {
    setActive(!active);
  };

  return (
    <ul className="transition-max-height mb-[17.5px]">
      <div
        className="flex gap-[10px] items-center select-none cursor-pointer"
        onClick={handleList}
      >
        <SlArrowRight
          className={`text-[12px] transition-transform ${
            active ? "rotate-90" : "rotate-0"
          }`}
        />
        <Text tag="h6" className={`font-bold text-primary`}>
          {title}
        </Text>
      </div>
      {data.map((item) => (
        <li
          key={item.id}
          className={`flex items-center gap-[10px] text-foreground relative hover:text-primary cursor-pointer${
            active
              ? "z-0 opacity-100 h-[25px] max-h-[25px] translate-y-[6px]"
              : "z-[-100] opacity-0 h-[0px] max-h-[0px] translate-y-[0px]"
          }`}
          style={{
            transition:
              "color ease 0.1s, opacity ease 0.1s, height ease 0.2s, max-height ease 0.2s, transform ease 0.2s",
          }}
        >
          <Link
            className={`flex items-center gap-[10px] ${
              pathname === `/vaults/${item.pathname}`
                ? "text-primary font-bold"
                : ""
            } `}
            href={`/vaults/${item.pathname}`}
          >
            <Text tag="span" className="text-[18px]">
              {item.icon}
            </Text>
            <Text tag="span">{item.name}</Text>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ToggleList;
