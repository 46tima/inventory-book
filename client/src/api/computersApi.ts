import type { Computer } from "../types/computer"

const API_URL = "/api/computers"

export type CreateComputerDto = Omit<Computer, "id">

export async function getComputers(): Promise<Computer[]> {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error("Не удалось загрузить компьютеры")
  }

  const data: Computer[] = await response.json()

  return data
}

export async function createComputer(
  computer: CreateComputerDto
): Promise<Computer> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(computer),
  })

  if (!response.ok) {
    throw new Error("Не удалось создать компьютер")
  }

  const data: Computer = await response.json()

  return data
}

export async function deleteComputerById(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Не удалось удалить компьютер")
  }
}