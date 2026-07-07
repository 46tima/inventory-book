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
      <div className="stats">
        <p>Всего ПК: {total}</p>
        <p>Рабочих: {working}</p>
        <p>Неисправных: {broken}</p>
        <p>На обслуживании: {maintenance}</p>
      </div>
    </Card>
  )
}

export default Stats