import Link from "next/link";
import React from "react";
import { MenuItem } from "../types/types";
import { Text } from "@/shared/ui/Text";

type Props = {
  isActive: boolean;
  item: MenuItem;
  handleItemClick: (id: number) => void;
};

export const ListItem = ({ isActive, item, handleItemClick }: Props) => {
  const content = (
    <>
      <Text tag="span" className="text-[18px]">
        {item.icon}
      </Text>
      <Text className="font-bold relative">{item.name}</Text>
      <span
        className={`block absolute w-[7px] h-[7px] bg-accent-foreground self-center rounded transition-left duration-200 transform left-[-21px]  ${
          isActive
            ? "left-[calc(100%+10px)]"
            : "group-hover:left-[calc(100%+10px)]"
        }`}
      ></span>
    </>
  );

  const styles =
    "text-accent flex items-center gap-[5px] cursor-pointer relative";

  return (
    <li
      className={`${
        isActive ? "pl-[15px]" : ""
      } group hover:pl-[15px] py-[7px] pl-[7px] flex rounded-tl-xl rounded-bl-xl pr-[14px] ml-[7px] select-none cursor-pointer`}
      style={{
        transition: "padding ease 0.3s, background-color ease-in-out 0.3s",
      }}
    >
      {item.pathname ? (
        <Link
          href={item.pathname}
          className={styles}
          onClick={() => handleItemClick(item.id)}
        >
          {content}
        </Link>
      ) : (
        <div className={styles} onClick={() => handleItemClick(item.id)}>
          {content}
        </div>
      )}
    </li>
  );
};
