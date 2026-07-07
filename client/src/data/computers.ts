import type { Computer } from "../types/computer"

export const initialComputers: Computer[] = [
  {
    id: 1,
    name: "PC-101",
    room: "101",
    ipAddress: "192.168.1.21",
    inventoryNumber: 10001,
    status: "working",
    hasAntivirus: true,
  },
  {
    id: 2,
    name: "PC-102",
    room: "102",
    ipAddress: "192.168.1.22",
    inventoryNumber: 10002,
    status: "broken",
    hasAntivirus: false,
  },
  {
    id: 3,
    name: "PC-103",
    room: "103",
    ipAddress: "192.168.1.23",
    inventoryNumber: 10003,
    status: "maintenance",
    hasAntivirus: true,
  },
]