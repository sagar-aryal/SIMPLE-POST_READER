import React, { useState } from "react";

const Login = (props) => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  return (
    <div className="login">
      <form className="login_form">
        <h1>Login</h1>
        <div className="login_field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="login_field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
