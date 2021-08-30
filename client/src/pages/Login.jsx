import React from "react";
import { Link } from "react-router-dom";

// Components Import //

import Footer from "../components/Footer/Footer";

import * as S from "./auth-styled";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faGoogle);

const LoginPage = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <S.FormPage>
      <S.Header>
        <Link to="/">
          <span>bunddle</span>
        </Link>
      </S.Header>
      <S.FormSection>
        <form onSubmit={submitHandler}>
          <span className="login-title">Login</span>
          <label className="input-title" htmlFor="email">
            Username or Email
          </label>
          <input type="email" name="email" placeholder="Username or Email" />
          <label className="input-title" htmlFor="password">
            Password
          </label>
          <input type="password" name="password" placeholder="Password" />
          <S.Wrapper>
            <div>
              <input
                type="checkbox"
                id="remember-me-checkbox"
                name="remember-me"
                value=""
              />
              <label className="remember-me-label" htmlFor="remember-me">
                {" "}
                Remember Me
              </label>
            </div>
            <Link className="forgot-password" to="/credentials-reset">
              Forgot password?
            </Link>
          </S.Wrapper>
          <button className="btn-short">Log In</button>
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

export default LoginPage;
