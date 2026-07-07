import "./App.css";

type Computer = {
    id: number;
    name: string;
    room: string;
};

function App() {
    const computers: Computer[] = [
        {
            id: 1,
            name: "PC-101",
            room: "101",
        },
        {
            id: 2,
            name: "PC-102",
            room: "102",
        },
        {
            id: 3,
            name: "PC-103",
            room: "103",
        },
    ];

    return (
        <div className="app">
            <h1>Список компьютеров</h1>

            {computers.map((computer) => (
                <div className="card" key={computer.id}>
                    <h2>{computer.name}</h2>
                    <p>Кабинет: {computer.room}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
