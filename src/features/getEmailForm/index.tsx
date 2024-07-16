"use client";

import { theme } from "@/shared/config/theme";
import { ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { EmailField } from "./ui/EmailField";
import { RememberCheckbox } from "./ui/RememberCheckbox";
import { SubmitButton } from "../../shared/ui/SubmitButton";
import RegForm from "@/shared/ui/RegForm";
import SignInWithGoogle from "../signInWithGoogle";
import CreateAccountLine from "@/pages/signIn/ui/CreateAccountLine";

export const SignInFormEmail = () => {
  return (
    <ThemeProvider theme={theme}>
      <RegForm>
        <EmailField />
        <RememberCheckbox />
        <SubmitButton />
        <SignInWithGoogle />
        <CreateAccountLine />
      </RegForm>
    </ThemeProvider>
  );
};
