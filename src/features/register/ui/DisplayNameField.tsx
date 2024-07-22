import React from "react";
import { TypeCustomTextField, TypeRegisterForm } from "./types/types";
import { CustomTextField } from "@/shared/ui/CustomTextField";

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
