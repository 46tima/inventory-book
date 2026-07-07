export type ComputerFilter = "all" | "working" | "broken" | "maintenance"

type FilterButtonsProps = {
  currentFilter: ComputerFilter
  onChangeFilter: (filter: ComputerFilter) => void
}

function FilterButtons({
  currentFilter,
  onChangeFilter,
}: FilterButtonsProps) {
  return (
    <div className="filter-buttons">
      <button
        className={currentFilter === "all" ? "active" : ""}
        onClick={() => onChangeFilter("all")}
      >
        Все
      </button>

      <button
        className={currentFilter === "working" ? "active" : ""}
        onClick={() => onChangeFilter("working")}
      >
        Рабочие
      </button>

      <button
        className={currentFilter === "broken" ? "active" : ""}
        onClick={() => onChangeFilter("broken")}
      >
        Неисправные
      </button>

      <button
        className={currentFilter === "maintenance" ? "active" : ""}
        onClick={() => onChangeFilter("maintenance")}
      >
        На обслуживании
      </button>
    </div>
  )
}

export default FilterButtons