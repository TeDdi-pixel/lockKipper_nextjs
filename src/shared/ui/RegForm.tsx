import React, { FormEventHandler, ReactNode } from "react";

export const RegForm = ({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-[350px] w-full border border-border rounded pt-[30px] px-[21px] pb-[21px] flex flex-col gap-[15px] font-montserrat"
    >
      {children}
    </form>
  );
};
