import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as UserActions from "../../../store/actions/UserActions";
import { bindActionCreators } from "redux";
import { User } from "../Types";
import {
  validateIdentification,
  validatePhone,
  validateEmail,
  validateBirthDate,
} from "../utils";

const AddUserForm = (props: any) => {
  const [names, setNames] = useState("");
  const [fisrtLastName, setFirstLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");
  const [identificationCard, setIdentificationCard] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Masculino");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("Soltero/a");
  const [hasChildren, setHasChildren] = useState("Si");
  const [birthDate, setBirthDate] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const validateFields = (user: User) => {
    let errorsTemp: string[] = [];
    const allVariableHasValue = Object.values(user).every(
      (valor) => valor.trim() !== ""
    );

    if (!allVariableHasValue) {
      setErrors(["Todos los campos son requeridos"]);
      return false;
    }

    if (!validateIdentification(user.identificationCard)) {
      errorsTemp = [
        ...errorsTemp,
        "Cedula Invalida, la cedula debe de ser de nacionalidad dominicana",
      ];
    }

    if (!validatePhone(user.phoneNumber)) {
      errorsTemp = [
        ...errorsTemp,
        "Telefono Invalido, el telefono debe ser de republica dominicana",
      ];
    }
    if (!validateEmail(user.email)) {
      errorsTemp = [...errorsTemp, "Email invalido"];
    }

    if (!validateBirthDate(user.birthDate)) {
      errorsTemp = [
        ...errorsTemp,
        "Fecha de nacimiento invalida debe de ser en el formato (dd/MM/yyyy)",
      ];
    }

    setErrors(errorsTemp);
    return errorsTemp.length === 0;
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    let user: User = {
      names,
      fisrtLastName,
      secondLastName,
      identificationCard,
      age,
      gender,
      address,
      phoneNumber,
      email,
      maritalStatus,
      hasChildren,
      birthDate,
    };

    console.log(user);

    if (validateFields(user)) {
      props.saveUser(user);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={onSubmit} className="add-user-form">
        <h2>Registrar Usuario</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombres
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={names}
            onChange={(e) => {
              setNames(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Primer Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={fisrtLastName}
            onChange={(e) => {
              setFirstLastName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Segundo Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={secondLastName}
            onChange={(e) => {
              setSecondLastName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Cedula
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={identificationCard}
            onChange={(e) => {
              setIdentificationCard(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Edad
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Genero
          </label>
          <select
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Correo Electronico
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Estado Civil
          </label>
          <select
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={maritalStatus}
            onChange={(e) => {
              setMaritalStatus(e.target.value);
            }}
          >
            <option value="Soltero/a">Soltero/a</option>
            <option value="Union Libre">Union Libre</option>
            <option value="Casado/a">Casado/a</option>
            <option value="Divorciado/a">Divorciado/a</option>
            <option value="Viudo/a">Viudo/a</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Tiene Hijos?
          </label>
          <select
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={hasChildren}
            onChange={(e) => {
              setHasChildren(e.target.value);
            }}
          >
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Fecha de Nacimiento
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={birthDate}
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
          />
        </div>
        {errors && errors.length > 0 && (
          <div className="alert alert-danger" role="alert">
            <ul>
              {errors.map((err) => (
                <li>{err}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-lg login-button">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(UserActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(AddUserForm);
