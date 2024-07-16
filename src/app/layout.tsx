import "./globals.css";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { montserrat } from "./fonts";
import StoreProvider from "@/store/StoreProvider";
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} text-[14px]`}>
        <StoreProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
