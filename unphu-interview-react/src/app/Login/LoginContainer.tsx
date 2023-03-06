import Login from "./Login";

const LoginContainer = () => {
  return (
    <div>
      <div className="container-flex login-navar">
        <nav className="navbar bg-body-tertiary bg-primary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Login Page</span>
          </div>
        </nav>
      </div>
      <Login />
    </div>
  );
};

export default LoginContainer;
