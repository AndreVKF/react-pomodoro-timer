import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: 80%;
  height: calc(100vh - 16rem);

  margin: 6rem auto;
  padding: 3.2rem;

  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
