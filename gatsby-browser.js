import React from "react"
import PageLayout from "./src/templates/PageLayout"
import { ThemeProvider } from "emotion-theming"
import theme from "./src/styles/theme"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
