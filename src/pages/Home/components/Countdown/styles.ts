import styled from "styled-components"

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 20rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  gap: 2.2rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 8rem 2rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme["orange-500"]};

  width: 6rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
