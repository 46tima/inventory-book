type Filter = "all" | "working" | "broken";

type FilterButtonsProps = {
    currentFilter: Filter;
    onChangeFilter: (filter: Filter) => void;
};

function FilterButtons({ currentFilter, onChangeFilter }: FilterButtonsProps) {
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
        </div>
    );
}

export default FilterButtons;
