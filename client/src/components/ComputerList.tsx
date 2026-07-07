import ComputerCard from "./ComputerCard"
import EmptyState from "./EmptyState"

import type { Computer } from "../types/computer"

type ComputerListProps = {
  computers: Computer[]
  onDelete: (id: number) => void
}

function ComputerList({ computers, onDelete }: ComputerListProps) {
  if (computers.length === 0) {
    return (
      <EmptyState message="Компьютеров по этому фильтру нет" />
    )
  }

  return (
    <div className="computer-list">
      {computers.map((computer) => (
        <ComputerCard
          key={computer.id}
          computer={computer}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default ComputerList