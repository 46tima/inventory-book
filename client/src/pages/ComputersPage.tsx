import { useEffect, useState } from "react"

import ComputerForm from "../components/ComputerForm"
import ComputerList from "../components/ComputerList"
import Stats from "../components/Stats"
import FilterButtons from "../components/FilterButtons"
import SearchInput from "../components/SearchInput"
import EmptyState from "../components/EmptyState"

import {
  createComputer,
  deleteComputerById,
  getComputers,
} from "../api/computersApi"

import type { Computer } from "../types/computer"
import type { ComputerFilter } from "../components/FilterButtons"
import type { CreateComputerDto } from "../api/computersApi"

function ComputersPage() {
  const [computers, setComputers] = useState<Computer[]>([])
  const [filter, setFilter] = useState<ComputerFilter>("all")
  const [search, setSearch] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    async function loadComputers() {
      try {
        setIsLoading(true)
        setError("")

        const data = await getComputers()

        setComputers(data)
      } catch {
        setError("Не удалось загрузить список компьютеров")
      } finally {
        setIsLoading(false)
      }
    }

    loadComputers()
  }, [])

  async function addComputer(computer: CreateComputerDto) {
    try {
      setError("")

      const createdComputer = await createComputer(computer)

      setComputers((prev) => [...prev, createdComputer])
    } catch {
      setError("Не удалось добавить компьютер")
    }
  }

  async function deleteComputer(id: number) {
    try {
      setError("")

      await deleteComputerById(id)

      setComputers((prev) =>
        prev.filter((computer) => computer.id !== id)
      )
    } catch {
      setError("Не удалось удалить компьютер")
    }
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
    const matchesStatus =
      filter === "all" || computer.status === filter

    const searchText = search.toLowerCase()

    const matchesSearch =
      computer.name.toLowerCase().includes(searchText) ||
      computer.room.toLowerCase().includes(searchText) ||
      computer.ipAddress.toLowerCase().includes(searchText) ||
      computer.inventoryNumber.toString().includes(searchText)

    return matchesStatus && matchesSearch
  })

  if (isLoading) {
    return <p className="text-gray-600">Загрузка...</p>
  }

  return (
    <>
      {error && (
        <p className="mb-4 rounded-xl bg-red-50 p-3 font-bold text-red-600">
          {error}
        </p>
      )}

      <ComputerForm onAddComputer={addComputer} />

      <Stats
        total={computers.length}
        working={workingCount}
        broken={brokenCount}
        maintenance={maintenanceCount}
      />

      <SearchInput value={search} onChange={setSearch} />

      <FilterButtons
        currentFilter={filter}
        onChangeFilter={setFilter}
      />

      {computers.length === 0 ? (
        <EmptyState message="Компьютеров пока нет" />
      ) : (
        <ComputerList
          computers={filteredComputers}
          onDelete={deleteComputer}
        />
      )}
    </>
  )
}

export default ComputersPage