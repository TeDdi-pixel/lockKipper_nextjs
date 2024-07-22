"use server";

import { auth } from "@/lib/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { showError } from "@/helpers/notify";
import { getFromCookies, saveToCookies } from "@/shared/model/cookies";
import {
  SignInResult,
  TypeSignIn,
} from "../../../../features/auth/ui/types/types";

export const signInWithEmail = async (
  data: TypeSignIn
): Promise<SignInResult> => {
  try {
    if (!data.email || !data.password)
      throw Error("No form data recieved. Please enter form fields correct");

    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;

    if (!user) throw Error("Firebase/No user found");

    const updatedUser = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      password: data.password,
      hint: null,
    };

    if (!updatedUser) throw Error("No user found");

    saveToCookies("user", updatedUser);

    if (!getFromCookies("user")) throw Error("No user saved into cookies");

    return { redirectTo: "/", user: updatedUser };
  } catch (error) {
    console.log(error);
    showError(`${error}`);
    return { redirectTo: "/sign_in", user: null };
  }
};
