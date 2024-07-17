"use client";
import React from "react";
import { EmailField } from "./EmailField";
import { RememberCheckbox } from "./RememberCheckbox";
import { SubmitButton } from "@/shared/ui/SubmitButton";
import { UseFormRegister } from "react-hook-form";
import { TypeSignIn } from "..";

type Props = {
  rememberEmail: boolean;
  register: UseFormRegister<TypeSignIn>;
  goToPassword: () => void;
};

export const EmailBlock = ({
  rememberEmail,
  register,
  goToPassword,
}: Props) => {
  return (
    <>
      <EmailField register={register} />
      <RememberCheckbox register={register} status={rememberEmail} />
      <SubmitButton text="Continue" onClick={goToPassword} type="button" />
    </>
  );
};
