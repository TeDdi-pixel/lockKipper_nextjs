import { TypeCustomTextField, TypeRegisterForm } from "./types/types";
import { CustomTextField } from "@/shared/ui/CustomTextField";

export const ProvePasswordField = ({
  register,
}: TypeCustomTextField<TypeRegisterForm>) => {
  return (
    <CustomTextField
      register={register}
      label={"Re-enter the master-password"}
      type="password"
      name="password"
      required
    />
  );
};
