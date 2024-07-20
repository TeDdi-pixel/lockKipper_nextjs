"use client";

import { SignInResult } from "@/features/auth/ui/types/types";
import { auth, db, googleProvider } from "@/lib/firebase/config";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";

export const signInWithGoogle = async (): Promise<SignInResult> => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;

    if (!user) throw Error("Firebase/No user found");

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    let firebaseUser;

    if (!docSnap.exists()) {
      firebaseUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        hint: null,
        password: null,
      };
      await setDoc(docRef, firebaseUser);
    } else {
      const data = docSnap.data();
      firebaseUser = {
        uid: user.uid,
        email: data.email ?? null,
        password: data.password ?? null,
        displayName: data.displayName ?? null,
        hint: data.hint ?? null,
        photoURL: data.photoURL ?? null,
      };
    }

    Cookies.set("user", JSON.stringify(firebaseUser));

    if (!Cookies.get("user")) throw Error("No user saved into cookies");
    return { redirectTo: "/", user: firebaseUser };
  } catch (error) {
    console.log(error);
    return { redirectTo: "/sign_in", user: null };
  }
};
