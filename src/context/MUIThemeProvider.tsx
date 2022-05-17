import { ThemeProvider } from "@mui/material/styles"
import { muiTheme } from "../config/mui-theme"

type MUIThemeProviderType = {
  children: React.ReactChild
}

export const MUIThemeProvider = ({ children }: MUIThemeProviderType) => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
}
