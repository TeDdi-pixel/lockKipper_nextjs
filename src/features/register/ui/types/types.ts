import { UseFormRegister } from "react-hook-form";

export type TypeCustomTextField<T extends TypeRegisterForm> = {
  register: UseFormRegister<T>;
};

export type TypeRegisterForm = {
  email: string;
  password: string;
  displayName: string;
  hint: string | null;
  provePassword: string;
};
