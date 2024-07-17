import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { TypeSignIn } from "..";

export const EmailField = ({
  register,
}: {
  register: UseFormRegister<TypeSignIn>;
}) => (
  <TextField
    label="Email"
    required
    fullWidth
    size="small"
    {...register("email")}
  />
);
