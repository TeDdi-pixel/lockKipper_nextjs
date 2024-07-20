"use client";
import React from "react";
import { RememberCheckbox } from "./RememberCheckbox";
import { SubmitButton } from "@/shared/ui/SubmitButton";
import { UseFormRegister } from "react-hook-form";
import { EmailField } from "./EmailField";
import { TypeSignIn } from "./types/types";

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
