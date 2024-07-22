import React from "react";
import { FiltersHeader } from "./FiltersHeader";
import { SearchInput } from "./SearchInput";
import { vaults } from "../config/vaults";
import ToggleList from "@/shared/ui/ToggleList";
import { items } from "../config/items";
import { folders } from "../config/folders";
import { LineThrough } from "@/shared/ui/LineThrough";
import { Trash } from "./Trash";

export const Filters = () => {
  return (
    <div className="max-w-[400px] w-full border border-border rounded-sm">
      <FiltersHeader />
      <div className="p-[17.5px]">
        <SearchInput />
        <ToggleList data={vaults} title="My vaults" />
        <LineThrough />
        <ToggleList data={items} title="All items" />
        <ToggleList data={folders} title="Folders" />
        <Trash />
      </div>
    </div>
  );
};
