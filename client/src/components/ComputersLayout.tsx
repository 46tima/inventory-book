import { NavLink, Outlet } from "react-router"

function ComputersLayout() {
  const linkClass = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return "rounded-xl bg-gray-900 px-4 py-2 text-sm text-white"
    }

    return "rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50"
  }

  return (
    <div>
      <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold">Раздел компьютеров</h2>

        <nav className="mt-4 flex flex-wrap gap-2">
          <NavLink className={linkClass} end to="/computers">
            Список
          </NavLink>

          <NavLink className={linkClass} to="/computers/archive">
            Архив
          </NavLink>
        </nav>
      </div>

      <Outlet />
    </div>
  )
}

export default ComputersLayout