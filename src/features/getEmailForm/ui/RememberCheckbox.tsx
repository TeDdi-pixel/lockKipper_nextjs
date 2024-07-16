import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";

export const RememberCheckbox = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label={
          <Typography sx={{ fontWeight: "500" }}>Remember email</Typography>
        }
      />
    </FormGroup>
  );
};
