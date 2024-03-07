import { useState } from "react";

import Button from "../components/Button";
import { Link } from "react-router-dom";

export function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    console.log("Name: ", name);
    console.log("Password   ", password);
  };

  const onReset = (event) => {
    setName("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={name}
          onChange={(e) => onChangeName(e)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => onChangePassword(e)}
        />
      </div>
      <Button onClickButton={onSubmit} label="Submit" />
      <Button onClickButton={onReset} label="Reset" />
      <Link to="/signup">Signup</Link>
    </div>
  );
}
