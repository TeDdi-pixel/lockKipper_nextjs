"use client";

import { showError } from "@/helpers/notify";
import { theme } from "@/shared/config/theme";
import { SubmitButton } from "@/shared/ui/SubmitButton";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailField from "./EmailField";
import { DisplayNameField } from "./DisplayNameField";
import { TypeRegisterForm } from "./types/types";
import { PasswordField } from "./PasswordField";
import { ProvePasswordField } from "./ProvePasswordField";
import { HintField } from "./HintField";
import { RegForm } from "@/shared/ui/RegForm";
import { createAccount } from "@/shared/api/firebase/register/createAccount";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/features/user/userSlice";
import { useAppDispatch } from "@/store/hooks";
import CreateAccountLine from "@/shared/ui/CreateAccountLine";

export const RegisterForm = () => {
  const { handleSubmit, register } = useForm<TypeRegisterForm>();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TypeRegisterForm> = async (data) => {
    try {
      const { user, redirectTo } = await createAccount(data);
      if (user) dispatch(setUser(user));
      if (redirectTo) router.replace(redirectTo);
    } catch (error) {
      console.log(error);
      showError(`${error}`);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <RegForm onSubmit={handleSubmit(onSubmit)}>
        <EmailField register={register} />
        <DisplayNameField register={register} />
        <PasswordField register={register} />
        <ProvePasswordField register={register} />
        <HintField register={register} />
        <SubmitButton text="Create account" type="submit" />
        <CreateAccountLine
          text="Already have an account?"
          buttonText="Log in"
          direction="/sign_in"
        />
      </RegForm>
    </ThemeProvider>
  );
};
