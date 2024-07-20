import { CustomTextField } from "@/shared/ui/layout/CustomTextField";
import React from "react";
import { TypeCustomTextField, TypeRegisterForm } from "./types/types";

export const PasswordField = ({
  register,
}: TypeCustomTextField<TypeRegisterForm>) => {
  return (
    <CustomTextField
      register={register}
      label={"Master-password"}
      type="password"
      name="password"
      required
    />
  );
};
