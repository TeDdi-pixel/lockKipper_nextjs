import { TextField, TextFieldProps } from "@mui/material";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface CustomTextFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: string;
  type?: string;
  required?: boolean;
  fullWidth?: boolean;
  size?: TextFieldProps["size"];
}

export const CustomTextField = <T extends FieldValues>({
  register,
  name,
  label,
  type = "text",
  required = false,
  fullWidth = true,
  size = "small",
}: CustomTextFieldProps<T>) => (
  <TextField
    label={label}
    required={required}
    type={type}
    fullWidth={fullWidth}
    size={size}
    {...register(name)}
  />
);
