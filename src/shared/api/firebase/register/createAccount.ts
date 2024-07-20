"use server";

import { SignInResult } from "@/features/auth/ui/types/types";
import { TypeRegisterForm } from "@/features/register/ui/types/types";
import { showError } from "@/helpers/notify";
import { auth, db } from "@/lib/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const createAccount = async (
  data: TypeRegisterForm
): Promise<SignInResult> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    if (!userCredential) throw Error("Firebase/No user has been created");

    const user = userCredential.user;

    const docRef = doc(db, "users", user.uid);

    let newFirebaseUser = {
      uid: user.uid,
      email: data.email,
      hint: data.hint,
      displayName: data.displayName,
      password: data.password,
      photoURL: user.photoURL,
    };

    await setDoc(docRef, newFirebaseUser);

    return { user: newFirebaseUser, redirectTo: "/" };
  } catch (error) {
    console.error(error);
    showError(`${error}`);
    return { user: null, redirectTo: "/create_account" };
  }
};
