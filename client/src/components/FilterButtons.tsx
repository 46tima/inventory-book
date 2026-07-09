export type ComputerFilter = "all" | "working" | "broken" | "maintenance"

type FilterButtonsProps = {
  currentFilter: ComputerFilter
  onChangeFilter: (filter: ComputerFilter) => void
}

function FilterButtons({
  currentFilter,
  onChangeFilter,
}: FilterButtonsProps) {
  function getButtonClass(filter: ComputerFilter) {
    const baseClass =
      "rounded-xl border px-4 py-2 text-sm font-medium transition"

    if (currentFilter === filter) {
      return `${baseClass} border-gray-900 bg-gray-900 text-white`
    }

    return `${baseClass} border-gray-300 bg-white text-gray-700 hover:bg-gray-50`
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <button
        className={getButtonClass("all")}
        onClick={() => onChangeFilter("all")}
      >
        Все
      </button>

      <button
        className={getButtonClass("working")}
        onClick={() => onChangeFilter("working")}
      >
        Рабочие
      </button>

      <button
        className={getButtonClass("broken")}
        onClick={() => onChangeFilter("broken")}
      >
        Неисправные
      </button>

      <button
        className={getButtonClass("maintenance")}
        onClick={() => onChangeFilter("maintenance")}
      >
        На обслуживании
      </button>
    </div>
  )
}

export default FilterButtons