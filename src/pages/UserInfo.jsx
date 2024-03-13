import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingelUser } from "../redux/actions/users";

export const UserInfo = ({ getSingelUser, userInfo, usersList }) => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("userInfo", usersList);
    if (id && usersList.length > 0) {
      let newUser = usersList.find((user) => user.id === parseInt(id));
      setUser(newUser);
    }
  }, [id, usersList]);

  return (
    <div>
      {user && user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.users.userInfo,
  usersList: state.users.usersList,
});

const mapDispatchToProps = { getSingelUser };

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
