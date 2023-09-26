import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    img {
      width: 40px;
      height: 40px;
    }

    h1 {
      font-size: 2.6rem;
      color: ${(props) => props.theme["gray-100"]};
    }
  }

  nav {
    display: flex;
    gap: 1.2rem;
  }

  a {
    width: 4.8rem;
    height: 4.8rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme["gray-100"]};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["orange-500"]};
    }

    &.active {
      color: ${(props) => props.theme["orange-500"]};
    }
  }
`
