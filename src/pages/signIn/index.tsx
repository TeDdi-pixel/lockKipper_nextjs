import { RegisterLayout } from "@/shared/ui/RegisterLayout";
import EntryTiltle from "./ui/EntryTiltle";
import { SignInForm } from "@/features/signIn";

export const SignInPage = () => {
  return (
    <RegisterLayout>
      <EntryTiltle />
      <SignInForm />
    </RegisterLayout>
  );
};
