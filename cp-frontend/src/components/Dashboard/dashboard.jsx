import './dashboard.css';
function dashboard() {


  return (
    <div>
                <div className="dashboard-container">
                  <h1>Bienvenido al Dashboard</h1>
                  <p>Aquí puedes ver un resumen de tus actividades, proyectos y estadísticas.</p>
                  <div className="dashboard-cards">
                    <div className="dashboard-card">
                      <h2>Proyectos Activos</h2>
                      <p>5</p>
                    </div>
                    <div className="dashboard-card">
                      <h2>Tareas Pendientes</h2>
                      <p>12</p>
                    </div>
                    <div className="dashboard-card">
                      <h2>Mensajes No Leídos</h2>
                      <p>3</p>
                    </div>
                  </div>
                </div>
    </div>
  );
}


export default dashboard;