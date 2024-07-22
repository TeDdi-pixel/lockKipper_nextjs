import React, { ReactNode } from "react";

export const Main = ({ children }: { children: ReactNode }) => {
  return <main className="flex w-full">{children}</main>;
};
