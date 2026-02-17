import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Agenda from "./pages/Agenda"
import Register from "./pages/Register"

function Home() {
  return <h1>Inicio</h1>
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conferencias" element={<Agenda />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Layout>
  )
}
