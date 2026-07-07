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
    return "status-good"
  }

  if (status === "broken") {
    return "status-bad"
  }

  if (status === "maintenance") {
    return "status-warning"
  }

  return ""
}