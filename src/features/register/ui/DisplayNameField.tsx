import { CustomTextField } from "@/shared/ui/layout/CustomTextField";
import React from "react";
import { TypeCustomTextField, TypeRegisterForm } from "./types/types";

export const DisplayNameField = ({
  register,
}: TypeCustomTextField<TypeRegisterForm>) => {
  return (
    <CustomTextField
      name="displayName"
      label="Account name"
      register={register}
      type="text"
      required
    />
  );
};
