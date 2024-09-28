import React from "react";
import type { Metadata } from "next";

import theme from "@/styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import StyledBackgroundLayout from "@/components/StyledBackgroundLayout";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Discovery the space",
};

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
              <StyledBackgroundLayout>
                {children}
              </StyledBackgroundLayout>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </React.StrictMode>
      </body>
    </html >

  );
}
