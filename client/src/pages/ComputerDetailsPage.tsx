import { Link, useParams } from "react-router"

import Card from "../components/Card"
import ComputerDetails from "../components/ComputerDetails"

import { initialComputers } from "../data/computers"

function ComputerDetailsPage() {
  const params = useParams()
  const computerId = Number(params.id)

  const computer = initialComputers.find(
    (computer) => computer.id === computerId
  )

  if (!computer) {
    return (
      <Card title="Компьютер не найден">
        <p className="text-gray-600">
          Компьютера с таким ID нет.
        </p>

        <Link
          className="mt-4 inline-block rounded-xl bg-gray-900 px-4 py-2 text-white"
          to="/computers"
        >
          Назад к списку
        </Link>
      </Card>
    )
  }

  return (
    <Card title={computer.name}>
      <ComputerDetails computer={computer} />

      <Link
        className="mt-4 inline-block rounded-xl bg-gray-900 px-4 py-2 text-white"
        to="/computers"
      >
        Назад к списку
      </Link>
    </Card>
  )
}

export default ComputerDetailsPage