import React from "react"
import ReactDOM from "react-dom/client"

import { GlobalStyle } from "./styles/global.ts"
import { ThemeProvider } from "styled-components"
import { defaultThemes } from "./styles/themes.ts"

import { App } from "./App.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultThemes}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
