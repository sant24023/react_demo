import { useState } from "react";

import Button from "../components/Button";
import { Link } from "react-router-dom";

export function Signup() {
   
  let obj = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(obj);


  let { fName, lName, email, password } = formData;
 
    
  const onChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const signUp = (event) => {
    console.log("data: ", formData);
   
  };

  const onReset = (event) => {
    setFormData(obj);
  };

  return (
    <div>
      <h1>SignUp</h1>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="fName"
          value={fName}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lName"
          value={lName}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
        />
      </div>
      <Button onClickButton={signUp} label="Submit" />
      <Button onClickButton={onReset} label="Reset" />
      <Link to="/">Login</Link>
    </div>
  );
}
