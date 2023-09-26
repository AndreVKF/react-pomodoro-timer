import { HeaderContainer } from "./styles"
import { Timer, Scroll } from "phosphor-react"
import { NavLink } from "react-router-dom"

import Logo from "../../assets/logo.png"

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="Logo da Aplicação" />
        <h1>Pomodoro Timer</h1>
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={36} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={36} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
