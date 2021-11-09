import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Posts from "./components/Posts";

function App() {
  const [token, setToken] = useState("");

  return (
    <div>
      {!token ? <Login setToken={setToken} /> : <Posts token={token} />}
    </div>
  );
}

export default App;
