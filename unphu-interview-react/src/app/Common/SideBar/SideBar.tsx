import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-dark">
      <nav className="navbar navbar-dark">
        <div className="navbar-brand">Menu</div>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/app/add-user">Añadir Usuario</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/app/user-list">Lista de Usuarios</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
