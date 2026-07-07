import Card from "./Card"
import ComputerDetails from "./ComputerDetails"

import type { Computer } from "../types/computer"

type ComputerCardProps = {
  computer: Computer
  onDelete: (id: number) => void
}

function ComputerCard({ computer, onDelete }: ComputerCardProps) {
  return (
    <Card title={computer.name}>
      <ComputerDetails computer={computer} />

      <button onClick={() => onDelete(computer.id)}>
        Удалить
      </button>
    </Card>
  )
}

export default ComputerCard