import { RegisterLayout } from "@/shared/ui/RegisterLayout";
import EntryTiltle from "./ui/EntryTiltle";
import { SignInFormEmail } from "@/features/getEmailForm";
import { SignInFormPassword } from "@/features/getPassworFom";

export const SignInPage = () => {
  return (
    <RegisterLayout>
      <EntryTiltle />
      <SignInFormEmail />
      <SignInFormPassword />
    </RegisterLayout>
  );
};
