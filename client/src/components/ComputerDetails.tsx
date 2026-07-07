import type { Computer } from "../types/computer"
import { getStatusClass, getStatusText } from "../utils/computerStatus"

type ComputerDetailsProps = {
  computer: Computer
}

function ComputerDetails({ computer }: ComputerDetailsProps) {
  return (
    <>
      <p>Кабинет: {computer.room}</p>
      <p>IP-адрес: {computer.ipAddress}</p>
      <p>Инвентарный номер: {computer.inventoryNumber}</p>

      <p className={getStatusClass(computer.status)}>
        Статус: {getStatusText(computer.status)}
      </p>

      <p>
        Антивирус:{" "}
        {computer.hasAntivirus ? "установлен" : "не установлен"}
      </p>

      {!computer.hasAntivirus && (
        <p className="error">Нужно установить антивирус</p>
      )}
    </>
  )
}

export default ComputerDetails