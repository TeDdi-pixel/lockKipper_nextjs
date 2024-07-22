import { RegisterLayout } from "@/shared/ui/layout/RegisterLayout";
import { SignInForm } from "@/features/auth/ui";
import { EntryTiltle } from "../../../shared/ui/EntryTiltle";

export const SignInPage = () => {
  return (
    <RegisterLayout>
      <EntryTiltle text="Log in"/>
      <SignInForm />
    </RegisterLayout>
  );
};
