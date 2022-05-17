import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Theme {
    layerCard: {
      background: {
        main: string
      }
      shadow: {
        hover: string
      }
      border: {
        unselected: string
        selected: string
        hover: string
      }
      label: {
        main: string
      }
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    layerCard?: {
      background?: {
        main?: string
      }
      shadow?: {
        hover?: string
      }
      border?: {
        unselected?: string
        selected?: string
        hover?: string
      }
      label: {
        main: string
      }
    }
  }
}

export const theme = createTheme({
  layerCard: {
    background: {
      main: "#FFFFFF"
    },
    shadow: {
      hover: "#65E9D9"
    },
    border: {
      unselected: "#EFEFEF",
      selected: "#3D8479",
      hover: "#65E9D9"
    },
    label: {
      main: "#1B1B1B"
    }
  },
  palette: {
    primary: {
      main: "#21B6A8"
    },
    secondary: {
      main: "#1B1B1B"
    }
  },
  typography: {
    fontFamily: "Plus Jakarta Sans"
  }
})
