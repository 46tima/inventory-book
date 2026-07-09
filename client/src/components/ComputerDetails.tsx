import type { Computer } from "../types/computer"
import { getStatusClass, getStatusText } from "../utils/computerStatus"

type ComputerDetailsProps = {
  computer: Computer
}

function ComputerDetails({ computer }: ComputerDetailsProps) {
  return (
    <div className="space-y-2 text-sm text-gray-700">
      <p>Кабинет: {computer.room}</p>
      <p>IP-адрес: {computer.ipAddress}</p>
      <p>Инвентарный номер: {computer.inventoryNumber}</p>

      <p className={`font-bold ${getStatusClass(computer.status)}`}>
        Статус: {getStatusText(computer.status)}
      </p>

      <p>
        Антивирус:{" "}
        {computer.hasAntivirus ? "установлен" : "не установлен"}
      </p>

      {!computer.hasAntivirus && (
        <p className="font-bold text-red-600">
          Нужно установить антивирус
        </p>
      )}
    </div>
  )
}

export default ComputerDetails