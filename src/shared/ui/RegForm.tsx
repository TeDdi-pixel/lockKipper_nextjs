import React, { ReactNode } from "react";

const RegForm = ({ children}: { children: ReactNode }) => {
  return (
    <form className="max-w-[350px] w-full border border-border rounded pt-[30px] px-[21px] pb-[21px] flex flex-col gap-[15px] font-montserrat">
      {children}
    </form>
  );
};

export default RegForm;
