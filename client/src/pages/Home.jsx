import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MaterialUIChip from "@material-ui/core/Chip";
import * as S from "./Home-styled";
// import Button from "@material-ui/core/Button";

///// Components Import /////

import Card from "../components/Card/Card";

///// Libraries Import /////

import SearchIcon from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// library.add(faFacebookF, faTwitter, faInstagram);
// import styled from "styled-components";

///// Home Component /////

const Home = () => {
  const handleClick = () => {
    return;
  };

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
      <S.Hero>
        <S.HeroTitle>
          <h1>Buy and sell digital goods</h1>
          <span>Templates, plugins, stock images and more.</span>
          <S.HeroSearch>
            <SearchIcon />
            <input type="text" placeholder="What are you looking for?" />
          </S.HeroSearch>
        </S.HeroTitle>
      </S.Hero>

      <S.Container>
        <S.BrowseCategories>
          <h1>Browse Categories</h1>
          <S.BrowseCategoriesButtons>
            <Link to="/categories/gaming">
              <MaterialUIChip
                label="Gaming"
                onClick={handleClick}
                variant="outlined"
              />
            </Link>
            <Link to="/categories/image">
              <MaterialUIChip
                label="Image"
                onClick={handleClick}
                variant="outlined"
              />
            </Link>

            <Link to="/categories/audio">
              <MaterialUIChip
                label="Audio and Music"
                onClick={handleClick}
                variant="outlined"
              />
            </Link>
            <Link to="/categories/application">
              <MaterialUIChip
                label="Application"
                onClick={handleClick}
                variant="outlined"
              />
            </Link>
          </S.BrowseCategoriesButtons>
        </S.BrowseCategories>

        <S.PopularSection>
          <h1>Popular</h1>
          <S.CardWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </S.CardWrapper>
        </S.PopularSection>
      </S.Container>

      <S.Footer>
        <S.FooterLogo>
          <span>bunddle</span>
        </S.FooterLogo>
        <S.FooterColumn>
          <span>Categories</span>
          <Link to="">Audio and Music</Link>
          <Link to="">Gaming</Link>
          <Link to="">Images</Link>
          <Link to="">Application</Link>
        </S.FooterColumn>
        <S.FooterColumn>
          <span>Support</span>
          <Link to="">FAQs</Link>
          <Link to="">Forums</Link>
          <Link to="">Contact Us</Link>
        </S.FooterColumn>
        <S.FooterColumn>
          <span>About Us</span>
          <Link to="">Background</Link>
          <Link to="">Careers</Link>
          <Link to="">Partners</Link>
        </S.FooterColumn>
        <span>Need help? Send us an Email </span>
        <Link to="" className={"emailRedirect"}>
          here.
        </Link>
        <S.FooterSocialMedia>
          <Link to="https://fb.com">
            {/* <FontAwesomeIcon
              icon={["fab", "facebook-f"]}
              size="2x"
              fixedWidth
            /> */}
            <FacebookIcon></FacebookIcon>
          </Link>
          <Link to="http://twitter.com">
            {/* <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" fixedWidth /> */}
            <TwitterIcon></TwitterIcon>
          </Link>
          <Link to="https://instagram.com">
            {/* <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" fixedWidth /> */}
            <InstagramIcon></InstagramIcon>
          </Link>
        </S.FooterSocialMedia>
        <S.FooterLegals>
          <span>© 2021 Bunddle</span>
          <Link to="">Terms of Use</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Site Map</Link>
        </S.FooterLegals>
      </S.Footer>
    </>
  );
};

export default Home;
