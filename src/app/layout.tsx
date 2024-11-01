import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import theme from "@/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Discovery the space",
};

const BackgroundLayout = dynamic(
  () => import("@/components/BackgroundLayout"),
  {
    ssr: false,
  }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <React.StrictMode>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <BackgroundLayout>
                {children}
              </BackgroundLayout>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </React.StrictMode>
      </body>
    </html >

  );
}
