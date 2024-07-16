import { ReactNode } from "react";

export const RegisterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-full flex justify-center items-center pt-[100px] flex-col gap-[36px]">
      {children}
    </div>
  );
};
