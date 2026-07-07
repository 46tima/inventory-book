import { useEffect, useState } from "react";

interface Computer {
    id: number;
    name: string;
    room: string;
}

function ComputerCard() {
    // my
    const [computers, setComputers] = useState<Computer[]>([]);
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    useEffect(() => {
        async function fetchComputers() {
            const response = await fetch("http://localhost:8080/computers");
            const data = await response.json();

            if (Array.isArray(data)) {
                setComputers(data);
            } else {
                setComputers([]);
            }
        }

        fetchComputers();
    }, []);

    async function createComputer(e: React.FormEvent) {
        e.preventDefault();

        await fetch("http://localhost:8080/computers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                room,
            }),
        });

        setName("");
        setRoom("");

        const response = await fetch("http://localhost:8080/computers");
        const data = await response.json();

        if (Array.isArray(data)) {
            setComputers(data);
        }
    }

    //DELETE
    async function deleteComputerById(id: number) {
        const response = await fetch("http://localhost:8080/computers{}");
        method: "DELETE";
    }//my_end

    return (
        <div className="card">
            <ul>
                {computers.map((computer) => (
                    <li key={computer.id}>
                        {computer.id} - {computer.name} - {computer.room}
                    </li>
                ))}
            </ul>

            <form onSubmit={createComputer}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Room"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
}

export default ComputerCard;
