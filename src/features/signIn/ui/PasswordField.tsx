import { TextField } from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { TypeSignIn } from "..";

export const PasswordField = ({
  register,
}: {
  register: UseFormRegister<TypeSignIn>;
}) => {
  return (
    <TextField
      label="Password"
      type="password"
      required
      fullWidth
      size="small"
      {...register("password")}
    />
  );
};
