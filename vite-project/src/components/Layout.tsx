import { useState, useEffect, type ReactNode } from "react"
import { Link, useNavigate } from "react-router-dom"

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  // Simulación de verificación de sesión (se activa al recargar o navegar)
  useEffect(() => {
    const user = localStorage.getItem("user_session")
    setIsLoggedIn(!!user)
  }, [])

  const handleLogout = () => {
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
      localStorage.removeItem("user_session")
      setIsLoggedIn(false)
      navigate("/")
    }
  }

  return (
    <>
      <header>
        <img
          className="header-banner"
          src="/banner-header.png"
          alt="Banner bandera de italia"
        />

        <div className="logo-container">
          <img
            src="/ucatolica-logo.png"
            alt="Logo Universidad Catolica"
            width={160}
            height={80}
          />
          <img
            src="/logo-coniiti.png"
            alt="Logo Coniiti"
            width={200}
            height={50}
          />
        </div>

        <nav className="navbar">
          <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="#invitados">Invitados</Link></li>
            <li><Link to="/conferencias">Agenda</Link></li>
            <li><Link to="#acerca-de">Acerca de</Link></li>
            <li><Link to="#contacto">Contacto</Link></li>
          </ul>

          <div className="user-auth-zone">
            {isLoggedIn ? (
              <div className="user-profile-menu">
                <Link to="/perfil" className="btn-profile">Mi Perfil</Link>
                <button onClick={handleLogout} className="btn-logout">Cerrar Sesión</button>
              </div>
            ) : (
              <Link to="/registro" className="btn-login-header">Inicia Sesión / Regístrate</Link>
            )}
          </div>
        </nav>
      </header>

      <main className="main-container">
        {children}
      </main>

      <footer>© CONIITI 2026</footer>
    </>
  )
}
