import { createTheme, PaletteOptions } from "@mui/material";
// import { Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";

import { Open_Sans } from "next/font/google";

const open_Sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface PaletteOptions {
    button: {
      primary: string;
    };
    footer: {
      primary: string;
      secondary: string;
      background: string;
      subBackground: string;
    };
    texts: {
      logo: string;
      shade1: string;
      shade2: string;
      shade3: string;
      light: string;
      lightShade1: string;
    };
    borders: {
      shade1: string;
      shade2: string;
    };
    backgrounds: {
      shade1: string;
      shade2: string;
      shade3: string;
    };
  }
}

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#FECE01" },
    secondary: { main: "#fff" },
    button: {
      primary: "#FECE01",
    },
    footer: {
      primary: "233545",
      secondary: "#1F303F",
      background: "rgba(35, 53, 69, 1)",
      subBackground: "rgba(31, 48, 63, 1)",
    },
    texts: {
      logo: "#212020",
      shade1: "#444444",
      shade2: "#FECE01",
      shade3: "#1C2B39",
      light: "#BFBFBF",
      lightShade1: "rgba(122, 135, 147, 1)",
    },
    borders: {
      shade1: "rgba(73, 93, 111, 1)",
      shade2: "rgba(118, 118, 118, 1)",
    },
    backgrounds: {
      shade1: "rgba(55, 75, 93, 1)",
      shade2: "rgba(37, 55, 71, 1)",
      shade3: "rgba(28, 43, 57, 1)",
    },
  },

  typography: {
    fontSize: 12,
    fontFamily: open_Sans.style.fontFamily,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: "100vh",
          backgroundColor: "#fff",
          overflow: "hidden",
        },
      },
    },
  },
});
