import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { History } from "./pages/History"
import { DefaultLayout } from "./layout/DefaultLayout"

export function Router() {
  return (
    <Routes>
      {/* Add constant layout to pages */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}