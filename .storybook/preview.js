import { ThemeProvider } from "@mui/material/styles"
import { addDecorator } from "@storybook/react"
import React from "react"
import { theme } from "../src/themes/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
