export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

import React from "react"

import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "@mui/material/styles"

import { muiTheme } from "../src/config/mui-theme"

addDecorator((story) => <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>)
