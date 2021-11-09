import React, { useState } from "react";
import { loginUser } from "../services/login";

const Login = ({ setToken }) => {
  const [status, setStatus] = useState("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = async (event) => {
    setStatus("pending");
    event.preventDefault();
    try {
      const response = await loginUser(email, name);
      const json = await response.json();
      //console.log(json);
      const slToken = json.data.sl_token;
      setToken(slToken);
    } catch (error) {
      setStatus("rejected");
    }
  };

  if (status === "pending") {
    return "Logging in . . .";
  }

  if (status === "rejected") {
    return "Something went wrong";
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login_form">
        <h1>Login</h1>
        <div className="login_field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="login_field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <button type="submit" className="login_button">
          Go
        </button>
      </form>
    </div>
  );
};

export default Login;
