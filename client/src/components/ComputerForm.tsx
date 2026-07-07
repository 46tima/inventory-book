import { useState } from "react"
import type { FormEvent } from "react"

import Card from "./Card"
import type { Computer, ComputerStatus } from "../types/computer"

type ComputerFormProps = {
  onAddComputer: (computer: Computer) => void
}

function ComputerForm({ onAddComputer }: ComputerFormProps) {
  const [name, setName] = useState<string>("")
  const [room, setRoom] = useState<string>("")
  const [ipAddress, setIpAddress] = useState<string>("")
  const [inventoryNumber, setInventoryNumber] = useState<string>("")
  const [status, setStatus] = useState<ComputerStatus>("working")
  const [hasAntivirus, setHasAntivirus] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

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

    const newComputer: Computer = {
      id: Date.now(),
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
      <form className="form" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}

        <input
          placeholder="Название ПК"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          placeholder="Кабинет"
          value={room}
          onChange={(event) => setRoom(event.target.value)}
        />

        <input
          placeholder="IP-адрес"
          value={ipAddress}
          onChange={(event) => setIpAddress(event.target.value)}
        />

        <input
          placeholder="Инвентарный номер"
          value={inventoryNumber}
          onChange={(event) => setInventoryNumber(event.target.value)}
        />

        <select
          value={status}
          onChange={(event) =>
            setStatus(event.target.value as ComputerStatus)
          }
        >
          <option value="working">Работает</option>
          <option value="broken">Не работает</option>
          <option value="maintenance">На обслуживании</option>
        </select>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={hasAntivirus}
            onChange={(event) => setHasAntivirus(event.target.checked)}
          />
          Антивирус установлен
        </label>

        <button type="submit">Добавить</button>
      </form>
    </Card>
  )
}

export default ComputerForm