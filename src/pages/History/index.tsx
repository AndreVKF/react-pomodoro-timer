import { useContext } from "react"
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { HistoryContainer, HistoryList, Status } from "./styles"
import { CyclesContext } from "../../contexts/CyclesContext"

export function History() {
  const { cycles, activeCycle, interruptCycle, resetCycleHistory } =
    useContext(CyclesContext)

  function handleDeleteHistory() {
    if (activeCycle) {
      interruptCycle()
    }

    resetCycleHistory()
    document.title = "Pomodoro Timer"
  }

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status statuscolor="green">Concluído</Status>
                  )}
                  {cycle.interruptDate && (
                    <Status statuscolor="red">Interrompido</Status>
                  )}
                  {!cycle.finishedDate && !cycle.interruptDate && (
                    <Status statuscolor="yellow">Em Andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>

      {cycles.length > 0 && (
        <button onClick={handleDeleteHistory}>Deletar Histórico</button>
      )}
    </HistoryContainer>
  )
}
