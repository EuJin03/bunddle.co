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
      <S.NavBar onScroll={visible}>
        <S.NavBarLogo onScroll={visible}>bunddle</S.NavBarLogo>
        <S.NavBarButtonsWrapper>
          <Link to={`/login`}>
            <S.NavBarButton onScroll={visible}>Log In</S.NavBarButton>
          </Link>
          <Link to={`/signup`}>
            <S.NavBarButton onScroll={visible}>Sign Up</S.NavBarButton>
          </Link>
          <Link to={`/seller`}>
            <S.NavBarButton className="start-selling-button" onScroll={visible}>
              Start Selling
            </S.NavBarButton>
          </Link>
          {/* <Button onScroll={visible}>En</Button> */}
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
          <Link>Audio and Music</Link>
          <Link>Gaming</Link>
          <Link>Images</Link>
          <Link>Application</Link>
        </S.FooterColumn>
        <S.FooterColumn>
          <span>Support</span>
          <Link>FAQs</Link>
          <Link>Forums</Link>
          <Link>Contact Us</Link>
        </S.FooterColumn>
        <S.FooterColumn>
          <span>About Us</span>
          <Link>Background</Link>
          <Link>Careers</Link>
          <Link>Partners</Link>
        </S.FooterColumn>
        <span>Need help? Send us an Email </span>
        <a href="" className={"emailRedirect"}>
          here.
        </a>
        <S.FooterSocialMedia>
          <a href="https://fb.com">
            {/* <FontAwesomeIcon
              icon={["fab", "facebook-f"]}
              size="2x"
              fixedWidth
            /> */}
            <FacebookIcon></FacebookIcon>
          </a>
          <a href="http://twitter.com">
            {/* <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" fixedWidth /> */}
            <TwitterIcon></TwitterIcon>
          </a>
          <a href="https://instagram.com">
            {/* <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" fixedWidth /> */}
            <InstagramIcon></InstagramIcon>
          </a>
        </S.FooterSocialMedia>
        <S.FooterLegals>
          <span>© 2021 Bunddle</span>
          <Link>Terms of Use</Link>
          <Link>Privacy Policy</Link>
          <Link>Site Map</Link>
        </S.FooterLegals>
      </S.Footer>
    </>
  );
};

export default Home;
