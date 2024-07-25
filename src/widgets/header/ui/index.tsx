import MainTitle from "@/shared/ui/MainTitle";
import React from "react";
import { HeaderProvider } from "../provider/HeaderProvider";

export const Header = () => {
  return (
    <HeaderProvider>
      <MainTitle text="All vaults" />
    </HeaderProvider>
  );
};
