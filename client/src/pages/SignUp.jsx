import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";

// Components Import //

import Footer from "../components/Footer/Footer";

import * as S from "./auth-styled";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faGoogle);

const SignUpPage = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const checkHandler = () => {
    console.log(passwordState);
    console.log(confirmPasswordState);
  };

  ////// PASSWORD VALIDATION //////

  const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.val, isValid: action.val.trim().length > 7 };
    }
  };

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  ////// PASSWORD VALIDATION - END //////

  ////// CONFIRM PASSWORD VALIDATION //////

  const confirmPasswordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.val, isValid: action.val === passwordState.value };
    }
  };

  const [confirmPasswordState, dispatchConfirmPassword] = useReducer(
    confirmPasswordReducer,
    {
      value: "",
      isValid: true,
    }
  );

  const confirmPasswordChangeHandler = (event) => {
    dispatchConfirmPassword({ type: "USER_INPUT", val: event.target.value });
  };

  ////// CONFIRM PASSWORD VALIDATION - END //////

  return (
    <S.FormPage>
      <S.Header>
        <Link to="/">
          <span>bunddle</span>
        </Link>
      </S.Header>
      <S.FormSection>
        <form onSubmit={submitHandler}>
          <span className="login-title">Sign Up</span>
          <label className="input-title" htmlFor="username">
            Username
          </label>
          <input type="text" name="username" placeholder="Username" />
          <label className="input-title" htmlFor="email">
            Email
          </label>
          <input type="text" name="email" placeholder="Email" />
          <label className="input-title" htmlFor="password">
            Password
          </label>
          <span
            className={`invalid-message ${
              passwordState.isValid === false ? "" : "hidden"
            }`}
          >
            Password must contains atleast 8 letters
          </span>
          <input
            className={`${passwordState.isValid === false ? "invalid" : ""}`}
            type="password"
            name="password"
            placeholder="Password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
          />
          <label className="input-title" htmlFor="confirm-password">
            Confirm Password
          </label>
          <span
            className={`invalid-message ${
              confirmPasswordState.isValid === false ? "" : "hidden"
            }`}
          >
            Password does not match
          </span>
          <input
            className={`${
              confirmPasswordState.isValid === false ? "invalid" : ""
            }`}
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
            value={confirmPasswordState.value}
            onChange={confirmPasswordChangeHandler}
          />
          <button className="btn-short" onClick={checkHandler}>
            Sign Up
          </button>
        </form>
        <hr></hr>
        <button className="btn-long google-login">
          <FontAwesomeIcon
            className="icon"
            icon={["fab", "google"]}
            size="1x"
          />
          Sign In with Google
        </button>
        <button className="btn-long fb-login">
          <FontAwesomeIcon
            className="icon"
            icon={["fab", "facebook-f"]}
            size="1x"
          />
          Sign In with Facebook
        </button>
      </S.FormSection>
      <Footer />
    </S.FormPage>
  );
};

export default SignUpPage;
