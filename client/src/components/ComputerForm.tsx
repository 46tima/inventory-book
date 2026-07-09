import { useState } from "react"
import type { FormEvent } from "react"

import Card from "./Card"
import type { ComputerStatus } from "../types/computer"
import type { CreateComputerDto } from "../api/computersApi"

type ComputerFormProps = {
  onAddComputer: (computer: CreateComputerDto) => void
}

function ComputerForm({ onAddComputer }: ComputerFormProps) {
  const [name, setName] = useState<string>("")
  const [room, setRoom] = useState<string>("")
  const [ipAddress, setIpAddress] = useState<string>("")
  const [inventoryNumber, setInventoryNumber] = useState<string>("")
  const [status, setStatus] = useState<ComputerStatus>("working")
  const [hasAntivirus, setHasAntivirus] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  const inputClass =
    "w-full rounded-xl border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500"

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (name.trim() === "") {
      setError("Введите название ПК")
      return
    }

    if (room.trim() === "") {
      setError("Введите кабинет")
      return
    }

    if (ipAddress.trim() === "") {
      setError("Введите IP-адрес")
      return
    }

    if (inventoryNumber.trim() === "") {
      setError("Введите инвентарный номер")
      return
    }

    if (Number.isNaN(Number(inventoryNumber))) {
      setError("Инвентарный номер должен быть числом")
      return
    }

    const newComputer: CreateComputerDto = {
      name,
      room,
      ipAddress,
      inventoryNumber: Number(inventoryNumber),
      status,
      hasAntivirus,
    }

    onAddComputer(newComputer)

    setName("")
    setRoom("")
    setIpAddress("")
    setInventoryNumber("")
    setStatus("working")
    setHasAntivirus(true)
    setError("")
  }

  return (
    <Card title="Добавить компьютер">
      <form className="space-y-3" onSubmit={handleSubmit}>
        {error && (
          <p className="rounded-xl bg-red-50 p-3 font-bold text-red-600">
            {error}
          </p>
        )}

        <input
          className={inputClass}
          placeholder="Название ПК"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          className={inputClass}
          placeholder="Кабинет"
          value={room}
          onChange={(event) => setRoom(event.target.value)}
        />

        <input
          className={inputClass}
          placeholder="IP-адрес"
          value={ipAddress}
          onChange={(event) => setIpAddress(event.target.value)}
        />

        <input
          className={inputClass}
          placeholder="Инвентарный номер"
          value={inventoryNumber}
          onChange={(event) => setInventoryNumber(event.target.value)}
        />

        <select
          className={inputClass}
          value={status}
          onChange={(event) =>
            setStatus(event.target.value as ComputerStatus)
          }
        >
          <option value="working">Работает</option>
          <option value="broken">Не работает</option>
          <option value="maintenance">На обслуживании</option>
        </select>

        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
          <input
            className="h-4 w-4"
            type="checkbox"
            checked={hasAntivirus}
            onChange={(event) => setHasAntivirus(event.target.checked)}
          />
          Антивирус установлен
        </label>

        <button
          className="rounded-xl bg-gray-900 px-4 py-2 font-medium text-white transition hover:bg-gray-700"
          type="submit"
        >
          Добавить
        </button>
      </form>
    </Card>
  )
}

export default ComputerForm