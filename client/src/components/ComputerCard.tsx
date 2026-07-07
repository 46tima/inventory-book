import type { Computer } from "../types/computer";

type ComputerCardProps = {
    computer: Computer;
};

function ComputerCard({ computer }: ComputerCardProps) {
    return (
        <div className="computer-card">
            <h2>{computer.name}</h2>

            <p>Кабинет: {computer.room}</p>
            <p>Инвентарный номер: {computer.inventoryNumber}</p>
            <p>IP-адрес: {computer.ipAddress}</p>

            <p className={computer.isWorking ? "status-good" : "status-bad"}>
                Статус: {computer.isWorking ? "Работает" : "Не работает"}
            </p>
        </div>
    );
}

export default ComputerCard;
