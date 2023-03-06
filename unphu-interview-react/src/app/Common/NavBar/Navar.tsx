import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navar = () => {
  
  return (
<Navbar bg="light" expand="lg" className="justify-content-end">
        <Nav>
          <NavDropdown title="Mi Perfil" className="dropdown-profile" >
            <NavDropdown.Item href="#action/3.2">Cerrar Sesion</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </Navbar>
  );
};

export default Navar;
