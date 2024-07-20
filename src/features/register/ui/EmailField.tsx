import { CustomTextField } from "@/shared/ui/layout/CustomTextField";
import React from "react";
import { TypeCustomTextField, TypeRegisterForm } from "./types/types";

const EmailField = ({ register }: TypeCustomTextField<TypeRegisterForm>) => {
  return (
    <CustomTextField
      register={register}
      label={"Email"}
      type="email"
      name="email"
      required
    />
  );
};

export default EmailField;
