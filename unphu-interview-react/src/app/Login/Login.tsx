import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginCreds = {
    userName: "wilber",
    password: "1234",
  };

  const navitation = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (userName === loginCreds.userName && password === loginCreds.password) {
        navitation('/app');
    } else {
        setError(true);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={onSubmit} className="login-form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {error &&
        <div className="alert alert-danger" role="alert">
          Usuario/Contrasena invalidos
        </div>
}
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-lg login-button">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
