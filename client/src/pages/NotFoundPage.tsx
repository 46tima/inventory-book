import { Link } from "react-router"

function NotFoundPage() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">Страница не найдена</h2>

      <p className="mt-2 text-gray-600">
        Такой страницы нет.
      </p>

      <Link
        className="mt-4 inline-block rounded-xl bg-gray-900 px-4 py-2 text-white"
        to="/"
      >
        На главную
      </Link>
    </div>
  )
}

export default NotFoundPage