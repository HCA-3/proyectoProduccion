import { useState } from "react"

export default function Register() {
  const [role, setRole] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    documentType: "CC",
    documentNumber: "",
    email: "",
    institutionalCode: "",
    career: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Datos de registro:", { role, ...formData })
    alert("¡Registro exitoso!")
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Registro de Asistente</h2>
        <p>Por favor, selecciona tu perfil y completa tus datos.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>¿Quién eres?</label>
            <div className="role-selector">
              <button 
                type="button" 
                className={role === "student" ? "active" : ""} 
                onClick={() => setRole("student")}
              >
                Estudiante
              </button>
              <button 
                type="button" 
                className={role === "professor" ? "active" : ""} 
                onClick={() => setRole("professor")}
              >
                Profesor
              </button>
              <button 
                type="button" 
                className={role === "guest" ? "active" : ""} 
                onClick={() => setRole("guest")}
              >
                Invitado
              </button>
            </div>
          </div>

          {role && (
            <div className="fade-in">
              <div className="form-group">
                <label htmlFor="fullName">Nombres y Apellidos Completos</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  required 
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="documentType">Tipo de Documento</label>
                  <select 
                    id="documentType" 
                    name="documentType" 
                    value={formData.documentType}
                    onChange={handleInputChange}
                  >
                    <option value="CC">Cédula de Ciudadanía</option>
                    <option value="CE">Cédula de Extranjería</option>
                    <option value="TI">Tarjeta de Identidad</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="documentNumber">Número de Documento</label>
                  <input 
                    type="text" 
                    id="documentNumber" 
                    name="documentNumber" 
                    required 
                    value={formData.documentNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ejemplo@correo.com"
                />
              </div>

              {role === "student" && (
                <div className="form-row fade-in">
                  <div className="form-group">
                    <label htmlFor="institutionalCode">Código Institucional</label>
                    <input 
                      type="text" 
                      id="institutionalCode" 
                      name="institutionalCode" 
                      required 
                      value={formData.institutionalCode}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="career">Carrera</label>
                    <input 
                      type="text" 
                      id="career" 
                      name="career" 
                      required 
                      value={formData.career}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              <button type="submit" className="btn-submit">Registrarse</button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
