import Card from "./Card"

type StatsProps = {
  total: number
  working: number
  broken: number
  maintenance: number
}

function Stats({ total, working, broken, maintenance }: StatsProps) {
  return (
    <Card title="Статистика">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Всего ПК</p>
          <p className="mt-1 text-2xl font-bold">{total}</p>
        </div>

        <div className="rounded-xl bg-green-50 p-4">
          <p className="text-sm text-green-700">Рабочих</p>
          <p className="mt-1 text-2xl font-bold text-green-700">
            {working}
          </p>
        </div>

        <div className="rounded-xl bg-red-50 p-4">
          <p className="text-sm text-red-700">Неисправных</p>
          <p className="mt-1 text-2xl font-bold text-red-700">
            {broken}
          </p>
        </div>

        <div className="rounded-xl bg-orange-50 p-4">
          <p className="text-sm text-orange-700">На обслуживании</p>
          <p className="mt-1 text-2xl font-bold text-orange-700">
            {maintenance}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default Stats