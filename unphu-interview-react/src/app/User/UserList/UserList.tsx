import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../../../store/actions/UserActions";
import { User } from "../Types";

const UserList = (props: any) => {
  const { loading, usersList } = props;

  useEffect(() => {
    props.fetchUserList();
  }, []);

  return (
    <div>
      {loading && <span>loading</span>}
      {!loading && usersList && usersList.length > 0 && (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo Eletronico</th>
            <th>Genero</th>
          </tr>
        </thead>
        <tbody>
            {usersList.map((user:User)=>(  <tr>
            <td>{user.identificationCard}</td>
            <td>{`${user.names} ${user.fisrtLastName} ${user.secondLastName}`}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
          </tr>
            ))}
        
        </tbody>
      </Table>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(UserActions, dispatch),
  };
};

const mapStateToProps = (state: any) => {
  return {
    usersList: state.users.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
