import { Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  variant?: "contained" | "text" | "outlined";
  text?: string;
  endIcon?: ReactNode;
  fullwidth?: boolean;
  fontSize?: string;
  type?: "submit" | "button";
  onClick?: () => void;
};

export const SubmitButton = ({
  variant = "contained",
  text = "Continue",
  endIcon,
  fullwidth = true,
  fontSize,
  onClick,
  type = "button",
}: Props) => {
  return (
    <Button
      type={type}
      variant={variant}
      className={`${variant === "contained" ? "bg-primary" : ""}`}
      endIcon={endIcon}
      onClick={type === "button" ? onClick : undefined}
      fullWidth={fullwidth}
    >
      <Typography sx={{ fontSize: fontSize }}>{text}</Typography>
    </Button>
  );
};
