import { Link } from "react-router"

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

      <div className="mt-4 flex gap-2">
        <Link
          className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-50"
          to={`/computers/${computer.id}`}
        >
          Подробнее
        </Link>

        <button
          className="rounded-xl border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
          onClick={() => onDelete(computer.id)}
        >
          Удалить
        </button>
      </div>
    </Card>
  )
}

export default ComputerCard