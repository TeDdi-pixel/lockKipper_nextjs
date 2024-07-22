import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export const Trash = () => {
  return (
    <div
      style={{
        transition: "color ease 0.1s",
      }}
      className="flex items-center gap-[10px] pt-[10px] cursor-pointer hover:text-primary"
    >
      <FaRegTrashCan className="text-[18px]" />
      <span>Trash</span>
    </div>
  );
};
