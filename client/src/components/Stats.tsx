type StatsProps = {
    total: number;
    working: number;
    broken: number;
};

function Stats({ total, working, broken }: StatsProps) {
    return (
        <div className="stats">
            <div className="stat-card">
                <h3>Всего ПК</h3>
                <p>{total}</p>
            </div>

            <div className="stat-card">
                <h3>Рабочих</h3>
                <p>{working}</p>
            </div>

            <div className="stat-card">
                <h3>Неисправных</h3>
                <p>{broken}</p>
            </div>
        </div>
    );
}

export default Stats;
