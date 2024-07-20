import { TypeUser } from "@/shared/types/user";

export type TypeSignIn = {
  email: string;
  rememberEmail: boolean;
  password: string;
};

export type SignInResult = {
  redirectTo: string;
  user: TypeUser | null
};
