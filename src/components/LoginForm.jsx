// import axios from "axios";
import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle user registration form submission
  const registerUser = async (e, userData) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6070/users/register",
        userData
      );
      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error(error); // Handle any errors that occurred during the request
    }
  };

  // Example usage
  // const userData = {
  //   username: ,
  //   email: "john@example.com",
  //   password: "password123",
  // };

  // registerUser(userData);

  return (
    <div>
      <form className="w-100" onSubmit={registerUser}>
        <div class="mb-3">
          <label for="exampleInputFullname1" class="form-label">
            Fullname
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputFullname"
            aria-describedby="fullnameHelp"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
