import { Text } from "@/shared/ui/Text";
import { ThemeProvider } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { theme } from "@/shared/config/theme";
import { SubmitButton } from "@/shared/ui/SubmitButton";

const SignInWithGoogle = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex items-center flex-col gap-[15px]">

      <Text>or</Text>

      <SubmitButton
        fullwidth
        text="Login with"
        variant="outlined"
        endIcon={<GoogleIcon />}
      />
      </div>
    </ThemeProvider>
  );
};

export default SignInWithGoogle;
