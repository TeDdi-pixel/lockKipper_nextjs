import { ProfilePhoto } from "@/entities/user";
import MainTitle from "@/shared/ui/MainTitle";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-[45px] mb-[30.5px]">
      <MainTitle text="All vaults" />
      <ProfilePhoto path={"/text-image2.jpg"} width={45} height={45} />
    </header>
  );
};
