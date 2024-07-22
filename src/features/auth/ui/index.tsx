"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import Cookies from "js-cookie";
import { showError, warn } from "@/helpers/notify";
import { signInWithEmail } from "@/shared/api/firebase/auth/signInWithEmail";
import { EmailBlock } from "./EmailBlock";
import { PasswordBlock } from "./PasswordBlock";
import { useRouter } from "next/navigation";
import { RegForm } from "@/shared/ui/RegForm";
import { TypeSignIn } from "./types/types";
import { useAppDispatch } from "@/store/hooks";
import { setProfilePhoto, setUser } from "@/store/features/user/userSlice";
import { signInWithGoogle } from "@/shared/api/firebase/auth/signInWithGoogle";
import CreateAccountLine from "@/shared/ui/CreateAccountLine";
import { SignInWithGoogle } from "./SignInWithGoogle";

export const SignInForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [emailEntered, setEmailEntered] = useState<boolean>(false);
  const { handleSubmit, setValue, control, register, getValues } =
    useForm<TypeSignIn>({
      defaultValues: { rememberEmail: false },
    });

  const rememberEmail = useWatch({
    control,
    name: "rememberEmail",
  });

  const onSubmit: SubmitHandler<TypeSignIn> = async (data) => {
    try {
      //check for checkbox is being checked and add or remove from cookies
      data.rememberEmail
        ? Cookies.set("rememberedEmail", data.email)
        : Cookies.remove("rememberedEmail");

      const { redirectTo, user } = await signInWithEmail(data);

      if (user) dispatch(setUser(user));
      if (redirectTo) router.replace(redirectTo);
    } catch (error) {
      console.log(error);
      showError(`${error}`);
    }
  };

  const authWithGoogle = async () => {
    const { redirectTo, user } = await signInWithGoogle();

    if (user) {
      dispatch(setUser(user));
      dispatch(setProfilePhoto(user.photoURL));
    }
    if (redirectTo) router.replace(redirectTo);
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
      <SignInWithGoogle onClick={authWithGoogle} />
      <CreateAccountLine
        text="New around here?"
        buttonText="Create account"
        direction="/create_account"
      />
    </RegForm>
  );
};
