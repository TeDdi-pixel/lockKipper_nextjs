"use client";

import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { cellsData } from "../config/data";
export const ContentTable = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckAll = () => {
    if (checkedItems.length === cellsData.length) {
      setCheckedItems([]); // Uncheck all
    } else {
      setCheckedItems(cellsData.map((item) => item.id)); // Check all
    }
  };

  const handleSelectCheckbox = (itemId: number) => {
    setCheckedItems(
      (prev) =>
        prev.includes(itemId)
          ? prev.filter((id) => id !== itemId) // Uncheck if already checked
          : [...prev, itemId] // Check if not checked
    );
  };
  return (
    <div className="w-full pl-[17.5px]">
      <table className="border-collapse w-full">
        <TableHead
          handleCheckAll={handleCheckAll}
          allChecked={checkedItems.length === cellsData.length}
        />
        <TableBody
          data={cellsData}
          handleSelectCheckbox={handleSelectCheckbox}
          checkedItems={checkedItems}
        />
      </table>
    </div>
  );
};
