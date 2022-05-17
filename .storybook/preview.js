import React from "react"

import { addDecorator } from "@storybook/react"
import { MUIThemeProvider } from "../src/context/MUIThemeProvider"

addDecorator((story) => <MUIThemeProvider>{story()}</MUIThemeProvider>)
