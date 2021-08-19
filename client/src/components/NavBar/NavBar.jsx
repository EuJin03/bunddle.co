import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as S from "./NavBar-styled";

const NavBar = () => {
  ///// Nav Bar Visibility Handler /////

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setVisible(window.pageYOffset > 0)
      );
    }
  }, []);

  ///// Nav Bar Visibility Handler - End /////

  return (
    <>
      <S.NavBar isScrolled={visible}>
        <S.NavBarLogo isScrolled={visible}>bunddle</S.NavBarLogo>
        <S.NavBarButtonsWrapper>
          <Link to={`/login`}>
            <S.NavBarButton isScrolled={visible}>Log In</S.NavBarButton>
          </Link>
          <Link to={`/signup`}>
            <S.NavBarButton isScrolled={visible}>Sign Up</S.NavBarButton>
          </Link>
          <Link to={`/seller`}>
            <S.NavBarButton
              className="start-selling-button"
              isScrolled={visible}
            >
              Start Selling
            </S.NavBarButton>
          </Link>
          {/* <Button isScrolled={visible}>En</Button> */}
        </S.NavBarButtonsWrapper>
      </S.NavBar>
    </>
  );
};

export default NavBar;
