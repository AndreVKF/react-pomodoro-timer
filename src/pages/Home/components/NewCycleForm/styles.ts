import styled from "styled-components"

export const FormContainer = styled.div`
  width: 110%;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 0.8rem;
  color: ${(props) => props.theme["gray-100"]};
  font-weight: 700;
  font-size: 2.4rem;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 3.2rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  font-weight: bold;
  font-size: inherit;
  padding: 2rem 0.8rem;
  color: ${(props) => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["orange-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 8rem;
`
