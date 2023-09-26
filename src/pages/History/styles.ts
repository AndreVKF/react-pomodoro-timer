import styled from "styled-components"

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 4rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3.2rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  button {
    border: 0;
    margin-top: 2rem;
    width: 16rem;
    padding: 1.6rem;
    border-radius: 8px;
    font-weight: bold;

    cursor: pointer;

    background-color: ${(props) => props.theme["orange-500"]};
    color: ${(props) => props.theme["gray-100"]};

    &:hover {
      background-color: ${(props) => props.theme["orange-700"]};
    }
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  display: table;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1.2rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 1.8rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.6rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.6rem;
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 1.2rem;
      font-size: 1.8rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.6rem;
      }

      &:last-child {
        padding-right: 1.6rem;
      }
    }
  }
`

interface StatusProps {
  statuscolor: "yellow" | "red" | "green"
}

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "orange-500",
  red: "red-500",
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statuscolor]]};
  }
`
