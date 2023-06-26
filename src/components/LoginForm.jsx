import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

 async const handleSubmit = (e) => {
   await axios.post("/register", { username, password });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-100">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary w-100
         "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
