import "./globals.css";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { montserrat } from "./fonts";
import StoreProvider from "@/store/StoreProvider";
import { ToastContainer } from "react-toastify";
import ClientThemeProvider from "./providers/ClientThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} text-[14px]`}>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ClientThemeProvider>{children}</ClientThemeProvider>
          </AppRouterCacheProvider>
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
