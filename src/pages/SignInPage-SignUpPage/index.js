import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import "./styles.scss";

const SignInSignUpPage = () => {
  return (
    <div className='signin-signup'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
