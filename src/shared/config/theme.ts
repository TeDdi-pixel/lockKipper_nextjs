import { createTheme } from "@mui/material";
import { montserrat } from "../../app/fonts";

export const theme = createTheme({
  typography: {
    fontFamily: `${montserrat.style.fontFamily}, sans-serif`,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontSize: 14,
    button: {
      textTransform: "none",
      fontSize: 14,
    },
  },
});
