import React from "react";
import { PasswordField } from "./PasswordField";
import { SubmitButton } from "@/shared/ui/SubmitButton";
import { UseFormRegister } from "react-hook-form";
import { TypeSignIn } from ".";

type Props = {
  register: UseFormRegister<TypeSignIn>;
};

export const PasswordBlock = ({ register }: Props) => {
  return (
    <>
      <PasswordField register={register} />
      <SubmitButton type="submit" text="Sign in" />
    </>
  );
};
