"use client";

import { theme } from "@/shared/config/theme";
import { ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import RegForm from "@/shared/ui/RegForm";
import SignInWithGoogle from "../signInWithGoogle";
import CreateAccountLine from "@/pages/signIn/ui/CreateAccountLine";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import Cookies from "js-cookie";
import { EmailBlock } from "./ui/EmailBlock";
import { PasswordBlock } from "./ui/PasswordBlock";
import { warn } from "@/helpers/notify";

export type TypeSignIn = {
  email: string;
  rememberEmail: boolean;
  password: string;
};

export const SignInForm = () => {
  const [emailEntered, setEmailEntered] = useState<boolean>(false);
  const { handleSubmit, setValue, control, register, getValues } =
    useForm<TypeSignIn>({
      defaultValues: { rememberEmail: false },
    });

  const rememberEmail = useWatch({
    control,
    name: "rememberEmail",
  });

  const onSubmit: SubmitHandler<TypeSignIn> = (data) => {
    if (data.rememberEmail) {
      Cookies.set("rememberedEmail", data.email);
    } else {
      Cookies.remove("rememberedEmail");
    }
  };

  //goes to password field if email is set
  const goToPassword = () => {
    if (getValues("email")) {
      setEmailEntered(true);
    } else warn("Please enter email");
  };

  useEffect(() => {
    setValue("email", Cookies.get("rememberedEmail") ?? "");
    setValue("rememberEmail", !!Cookies.get("rememberedEmail"));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RegForm onSubmit={handleSubmit(onSubmit)}>
        {!emailEntered ? (
          <EmailBlock
            register={register}
            rememberEmail={rememberEmail}
            goToPassword={goToPassword}
          />
        ) : (
          <PasswordBlock register={register} />
        )}
        <SignInWithGoogle />
        <CreateAccountLine />
      </RegForm>
    </ThemeProvider>
  );
};
