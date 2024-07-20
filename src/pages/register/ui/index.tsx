import { RegisterForm } from "@/features/register/ui";
import { EntryTiltle } from "@/shared/ui/EntryTiltle";
import { RegisterLayout } from "@/shared/ui/layout/RegisterLayout";
import React from "react";

export const RegisterPage = () => {
  return (
    <RegisterLayout>
      <EntryTiltle text="Create account" />
      <RegisterForm />
    </RegisterLayout>
  );
};
