import { useState } from "react"

import ComputerForm from "../components/ComputerForm"
import Stats from "../components/Stats"
import FilterButtons from "../components/FilterButtons"
import ComputerList from "../components/ComputerList"

import { initialComputers } from "../data/computers"

import type { Computer } from "../types/computer"
import type { ComputerFilter } from "../components/FilterButtons"

function ComputersPage() {
  const [computers, setComputers] = useState<Computer[]>(initialComputers)
  const [filter, setFilter] = useState<ComputerFilter>("all")

  function addComputer(computer: Computer) {
    setComputers((prev) => [...prev, computer])
  }

  function deleteComputer(id: number) {
    setComputers((prev) =>
      prev.filter((computer) => computer.id !== id)
    )
  }

  const workingCount = computers.filter(
    (computer) => computer.status === "working"
  ).length

  const brokenCount = computers.filter(
    (computer) => computer.status === "broken"
  ).length

  const maintenanceCount = computers.filter(
    (computer) => computer.status === "maintenance"
  ).length

  const filteredComputers = computers.filter((computer) => {
    if (filter === "working") {
      return computer.status === "working"
    }

    if (filter === "broken") {
      return computer.status === "broken"
    }

    if (filter === "maintenance") {
      return computer.status === "maintenance"
    }

    return true
  })

  return (
    <>
      <ComputerForm onAddComputer={addComputer} />

      <Stats
        total={computers.length}
        working={workingCount}
        broken={brokenCount}
        maintenance={maintenanceCount}
      />

      <FilterButtons
        currentFilter={filter}
        onChangeFilter={setFilter}
      />

      <ComputerList
        computers={filteredComputers}
        onDelete={deleteComputer}
      />
    </>
  )
}

export default ComputersPage