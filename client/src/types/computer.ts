export type ComputerStatus = "working" | "broken" | "maintenance"

export type Computer = {
  id: number
  name: string
  room: string
  ipAddress: string
  inventoryNumber: number
  status: ComputerStatus
  hasAntivirus: boolean
}