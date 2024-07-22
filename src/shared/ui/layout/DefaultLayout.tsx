import { Header } from "@/widgets/header";
import { Menu } from "@/widgets/menu";
import React, { ReactNode } from "react";
import { Main } from "../Main";
import { Filters } from "@/widgets/filters";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <Menu />
      <div className="flex flex-col w-full p-[21px]">
        <Header />
        <Main>
          <Filters />
          {children}
        </Main>
      </div>
    </div>
  );
};

export default DefaultLayout;
