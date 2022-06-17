import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

import { signUpstart } from "../../redux/user/user.actions";
import "./styles.scss";

const SignUp = ({ signUpstart }) => {
  const [userDetails, setUserDetails] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userDetails;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    signUpstart(email, password, displayName);
    setUserDetails({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I don't have an account</h2>
      <span>Sign up with email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpstart: (email, password, displayName) =>
    dispatch(signUpstart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
