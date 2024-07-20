import { Text } from "@/shared/ui/Text";
import { Button, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { theme } from "@/shared/config/theme";

const SignInWithGoogle = ({ onClick }: { onClick: () => void }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex items-center flex-col gap-[15px]">
        <Text>or</Text>

        <Button
          fullWidth
          variant="outlined"
          endIcon={<GoogleIcon />}
          onClick={onClick}
        >
          <Typography sx={{ fontSize: 14 }}>Login with</Typography>
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default SignInWithGoogle;
