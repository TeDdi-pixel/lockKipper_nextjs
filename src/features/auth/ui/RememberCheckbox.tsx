import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { TypeSignIn } from "./types/types";

export const RememberCheckbox = ({
  register,
  status,
}: {
  register: UseFormRegister<TypeSignIn>;
  status: boolean;
}) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox {...register("rememberEmail")} checked={status} />}
        label={
          <Typography sx={{ fontWeight: "500" }}>Remember email</Typography>
        }
      />
    </FormGroup>
  );
};
