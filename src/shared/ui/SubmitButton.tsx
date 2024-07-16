import { Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  variant?: "contained" | "text" | "outlined";
  text?: string;
  endIcon?: ReactNode;
  fullwidth?: boolean;
  fontSize?: string;
};

export const SubmitButton = ({
  variant = "contained",
  text = "Continue",
  endIcon,
  fullwidth = true,
  fontSize,
}: Props) => {
  return (
    <Button
      type="submit"
      variant={variant}
      className={`${variant === "contained" ? "bg-primary" : ""}`}
      endIcon={endIcon}
      fullWidth={fullwidth}
    >
      <Typography sx={{ fontSize: fontSize }}>{text}</Typography>
    </Button>
  );
};
