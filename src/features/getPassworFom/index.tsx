"use client";

import CreateAccountLine from "@/pages/signIn/ui/CreateAccountLine";
import { theme } from "@/shared/config/theme";
import RegForm from "@/shared/ui/RegForm";
import { SubmitButton } from "@/shared/ui/SubmitButton";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { PasswordField } from "./ui/PasswordField";

export const SignInFormPassword = () => {
  return (
    <ThemeProvider theme={theme}>
      <RegForm>
        <PasswordField />
        <SubmitButton />
        <CreateAccountLine />
      </RegForm>
    </ThemeProvider>
  );
};
