import "./App.css"

import { Routes, Route } from "react-router"

import AppLayout from "./components/AppLayout"
import ComputersLayout from "./components/ComputersLayout"

import HomePage from "./pages/HomePage"
import ComputersPage from "./pages/ComputersPage"
import ComputerDetailsPage from "./pages/ComputerDetailsPage"
import ComputerArchivePage from "./pages/ComputerArchivePage"
import RoomsPage from "./pages/RoomsPage"
import AboutPage from "./pages/AboutPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />

        <Route path="computers" element={<ComputersLayout />}>
          <Route index element={<ComputersPage />} />
          <Route path="archive" element={<ComputerArchivePage />} />
          <Route path=":id" element={<ComputerDetailsPage />} />
        </Route>

        <Route path="rooms" element={<RoomsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App