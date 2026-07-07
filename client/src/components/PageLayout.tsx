import type { ReactNode } from "react"

type PageLayoutProps = {
  children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="app">
      <header className="header">
        <h1>Учёт компьютеров</h1>
        <p>React + TypeScript проект</p>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <p>2026 · Мини-проект</p>
      </footer>
    </div>
  )
}

export default PageLayout