import styled from "styled-components"

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
  }
`

export const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1.6rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountDownButton)`
  background-color: ${(props) => props.theme["orange-500"]};
  color: ${(props) => props.theme["gray-100"]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["orange-700"]};
  }
`

export const StopCountdownButton = styled(BaseCountDownButton)`
  background-color: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["gray-100"]};

  &:not(:disabled):hover {
    opacity: 0.8;
  }
`
