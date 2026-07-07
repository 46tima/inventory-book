import { useState } from "react"
import "./App.css"

import Header from "./components/Header"
import Stats from "./components/Stats"
import FilterButtons from "./components/FilterButtons"
import ComputerCard from "./components/ComputerCard"

import type { Computer } from "./types/computer"

type Filter = "all" | "working" | "broken"

const computers: Computer[] = [
  {
    id: 1,
    name: "PC-101",
    room: "101",
    inventoryNumber: 10001,
    ipAddress: "192.168.1.21",
    isWorking: true,
  },
  {
    id: 2,
    name: "PC-102",
    room: "102",
    inventoryNumber: 10002,
    ipAddress: "192.168.1.22",
    isWorking: false,
  },
  {
    id: 3,
    name: "PC-103",
    room: "103",
    inventoryNumber: 10003,
    ipAddress: "192.168.1.23",
    isWorking: true,
  },
  {
    id: 4,
    name: "PC-104",
    room: "104",
    inventoryNumber: 10004,
    ipAddress: "192.168.1.24",
    isWorking: true,
  },
  {
    id: 5,
    name: "PC-105",
    room: "105",
    inventoryNumber: 10005,
    ipAddress: "192.168.1.25",
    isWorking: false,
  },
]

function App() {
  const [filter, setFilter] = useState<Filter>("all")

  const workingComputers = computers.filter((computer) => computer.isWorking)
  const brokenComputers = computers.filter((computer) => !computer.isWorking)

  const filteredComputers = computers.filter((computer) => {
    if (filter === "working") {
      return computer.isWorking
    }

    if (filter === "broken") {
      return !computer.isWorking
    }

    return true
  })

  return (
    <div className="app">
      <Header />

      <Stats
        total={computers.length}
        working={workingComputers.length}
        broken={brokenComputers.length}
      />

      <FilterButtons
        currentFilter={filter}
        onChangeFilter={setFilter}
      />

      <div className="computer-list">
        {filteredComputers.map((computer) => (
          <ComputerCard key={computer.id} computer={computer} />
        ))}
      </div>
    </div>
  )
}

export default App