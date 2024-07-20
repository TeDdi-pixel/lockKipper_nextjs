import { ReactNode } from "react";

export const RegisterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-full flex justify-center items-center py-[100px] flex-col gap-[36px] px-[20px]">
      {children}
    </div>
  );
};
