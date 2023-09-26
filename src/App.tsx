import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router.tsx"
import { CyclesContextProvider } from "./contexts/CyclesContext.tsx"

export function App() {
  return (
    <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </BrowserRouter>
  )
}
