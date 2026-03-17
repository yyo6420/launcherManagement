import LaunchersPage from './pages/LaunchersPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import './styles/App.css'
import { Routes, Route } from "react-router"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LaunchersPage />} />
      </Routes>
    </>
  )
}

export default App
