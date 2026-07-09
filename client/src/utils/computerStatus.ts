import type { ComputerStatus } from "../types/computer"

export function getStatusText(status: ComputerStatus) {
  if (status === "working") {
    return "Работает"
  }

  if (status === "broken") {
    return "Не работает"
  }

  if (status === "maintenance") {
    return "На обслуживании"
  }

  return "Неизвестно"
}

export function getStatusClass(status: ComputerStatus) {
  if (status === "working") {
    return "text-green-600"
  }

  if (status === "broken") {
    return "text-red-600"
  }

  if (status === "maintenance") {
    return "text-orange-500"
  }

  return "text-gray-600"
}