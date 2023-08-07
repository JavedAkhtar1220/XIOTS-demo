"use client";

/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import styles from "./styles/layout.module.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./styles/theme";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Providers>
        <html lang="en">
          <body className={styles.bodyContainer}>
            <Header />
            <main className={styles.childrenContainer}>{props.children}</main>
            <Footer />
          </body>
        </html>
      </Providers>
    </ThemeProvider>
  );
}
