"use client";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/shared/config/theme";
import { ReactNode } from "react";

export default function ClientThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
