import type { ReactNode } from "react"

type CardProps = {
  title?: string
  children: ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {title && (
        <h2 className="mb-3 text-xl font-bold text-gray-900">
          {title}
        </h2>
      )}

      {children}
    </div>
  )
}

export default Card