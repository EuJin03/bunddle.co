import React from "react";
import { Link } from "react-router-dom";
import MaterialUIChip from "@material-ui/core/Chip";
import * as S from "./Home-styled";
// import Button from "@material-ui/core/Button";

///// Components Import /////

import Card from "../components/Card/Card";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

///// Libraries Import /////

import SearchIcon from "@material-ui/icons/Search";

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

  return (
    <>
      <NavBar id="nav-bar" />
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

      <Footer />
    </>
  );
};

export default Home;
