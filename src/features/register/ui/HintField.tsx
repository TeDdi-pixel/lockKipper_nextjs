import { CustomTextField } from "@/shared/ui/CustomTextField";
import { TypeCustomTextField, TypeRegisterForm } from "./types/types";

export const HintField = ({
  register,
}: TypeCustomTextField<TypeRegisterForm>) => {
  return (
    <CustomTextField
      register={register}
      label={"Master-password hint"}
      name="hint"
    />
  );
};
