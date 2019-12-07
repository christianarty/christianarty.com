import React from "react"
import PageLayout from "./src/templates/PageLayout"
import { ThemeProvider } from "emotion-theming"
import theme from "./src/styles/theme"

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <PageLayout {...props}>{element}</PageLayout>
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
