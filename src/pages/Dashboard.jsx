import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers, addUser } from "../redux/actions/users";
import { Link } from "react-router-dom";
import ButtonComp from "../components/Button";
import { Button, TextField } from "@mui/material";

const Dashboard = ({ getUsers, addUser, usersDataList }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (usersDataList.length > 0) {
      console.log(usersDataList);
    }
  }, [usersDataList]);

  useEffect(() => {
    getUsers();
  }, []);

  const onSubmit = () => {
    let newUser = {
      name,
      email,
    };
    addUser(newUser);
  };

  return (
    <>
      {usersDataList &&
        usersDataList.length > 0 &&
        usersDataList.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                marginLeft: "10px",
              }}
            >
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <Link to={`/${user.id}/user-info`}>User Info</Link>
            </div>
          );
        })}

      <div>
        <h1>Add user</h1>

        <TextField
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={onChangeName}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          className="input"
        />
        {/* <butt onClick={onSubmit}>Submit</butt
        on> */}

        <ButtonComp onClick={onSubmit} label="Submit" styleName="button" />

        <Button
          variant="outlined"
          color="primary"
          sx={{
            marginTop: "20px",
            width: "200px",
          }}
        >
          MUI BUTTON
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  usersDataList: state.users.usersList,
});

const mapDispatchToProps = {
  getUsers,
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
