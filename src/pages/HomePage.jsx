import React from "react";
import WelcomeComponent from "../components/WelcomeComponent";
import LoginForm from "../components/LoginForm";

const HomePage = () => {
  return (
    <div className="">
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center w-100 vh-100">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <WelcomeComponent />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
