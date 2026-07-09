import { NavLink, Outlet } from "react-router"

function AppLayout() {
  const linkClass = ({ isActive }: { isActive: boolean }) => {
    const baseClass =
      "rounded-xl border px-4 py-2 text-sm font-medium transition"

    if (isActive) {
      return `${baseClass} border-gray-900 bg-gray-900 text-white`
    }

    return `${baseClass} border-gray-300 bg-white text-gray-700 hover:bg-gray-50`
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold">Учёт компьютеров</h1>

          <p className="mt-2 text-gray-500">
            React + TypeScript + Layout Routes
          </p>

          <nav className="mt-5 flex flex-wrap gap-2">
            <NavLink className={linkClass} to="/">
              Главная
            </NavLink>

            <NavLink className={linkClass} to="/computers">
              Компьютеры
            </NavLink>

            <NavLink className={linkClass} to="/rooms">
              Кабинеты
            </NavLink>

            <NavLink className={linkClass} to="/about">
              О проекте
            </NavLink>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>2026 · Мини-проект</p>
        </footer>
      </div>
    </div>
  )
}

export default AppLayout