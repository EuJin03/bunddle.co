import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
// import Button from "@material-ui/core/Button";

///// Components Import /////

import Card from "../components/Card";

///// Libraries Import /////

import SearchIcon from "@material-ui/icons/Search";

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
      <Nav onScroll={visible}>
        <Logo onScroll={visible}>bunddle</Logo>
        <ButtonsWrapper>
          <Link to={`/login`}>
            <Button onScroll={visible}>Log In</Button>
          </Link>
          <Link to={`/signup`}>
            <Button onScroll={visible}>Sign Up</Button>
          </Link>
          <Link to={`/seller`}>
            <Button className="start-selling-button" onScroll={visible}>
              Start Selling
            </Button>
          </Link>
          <Button onScroll={visible}>En</Button>
        </ButtonsWrapper>
      </Nav>
      <Header>
        <Title>
          <h1>Buy and sell digital goods</h1>
          <span>Templates, plugins, stock images and more.</span>
          <Search>
            <SearchIcon />
            <input type="text" placeholder="What are you looking for?" />
          </Search>
        </Title>
      </Header>

      <Container>
        <Browse>
          <h1>Browse Categories</h1>
          <Wrap>
            <Link to="/categories/gaming">
              <Chip label="Gaming" onClick={handleClick} variant="outlined" />
            </Link>
            <Link to="/categories/image">
              <Chip label="Image" onClick={handleClick} variant="outlined" />
            </Link>

            <Link to="/categories/audio">
              <Chip
                label="Audio and Music"
                onClick={handleClick}
                variant="outlined"
              />
            </Link>
            <Link to="/categories/application">
              <Chip
                label="Application"
                onClick={handleClick}
                variant="outlined"
              />
            </Link>
          </Wrap>
        </Browse>

        <Popular>
          <h1>Popular</h1>
          <CardWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardWrapper>
        </Popular>
      </Container>
    </>
  );
};

///// Styles /////

//       Nav Bar

const Nav = styled.div`
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0);
  align-items: center;
  justify-content: space-between;
  position: absolute;
  position: fixed;
  // position: -webkit-sticky;
  // top: 0px;
  z-index: 999;
  transition: all 0.1s ease-in-out;

  ${({ onScroll }) =>
    onScroll &&
    `
    background: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  `}
`;

///// Nav bar logo /////

const Logo = styled.div`
  letter-spacing: -2px;
  font-weight: 500;
  font-size: 30px;
  margin: 10px;
  user-select: none;
  margin-left: 30px;
  color: #fff;
  transition: all 0.1s ease-in-out;

  ${({ onScroll }) =>
    onScroll &&
    `
    color: #000;
  `}
`;

///// Nav Bar Button /////

const ButtonsWrapper = styled.div`
  margin-right: 30px;
`;

const Button = styled.div`
  display: inline;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  transition: all 0.1s ease-in-out;

  ${({ onScroll }) =>
    onScroll &&
    `
    color: #000;
  `}

  &.start-selling-button {
    color: #7cdf96;
    ${({ onScroll }) =>
      onScroll &&
      `
    color: #49a36c;
  `}
  }

  &:hover {
    color: #5b876c;
    font-size: 16px;
  }
`;

//       Header

const Header = styled.div`
  width: 100%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgb(61, 61, 61);
  background: linear-gradient(
    126deg,
    rgba(61, 61, 61, 1) 0%,
    rgba(74, 74, 74, 1) 25%,
    rgba(61, 61, 61, 1) 50%,
    rgba(66, 75, 67, 1) 75%,
    rgba(61, 61, 61, 1) 100%
  );
  color: #f1f1f1;

  .padding {
    padding-top: 80px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins", sans-serif;
  margin: auto 0;
  text-align: center;

  h1 {
    letter-spacing: -6px;
    font-weight: 700;
    font-size: 88px;
    margin: 0;
    user-select: none;
  }

  span {
    font-size: 18px;
    margin-top: 10px;
    padding: 0 0 20px;
  }
`;

const Search = styled.div`
  margin: auto;
  margin-top: 15px;
  width: 80%;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    color: rgba(176, 176, 176, 1);
  }

  input {
    border: none;
    background-color: transparent;
    outline-width: 0;
    width: 100%;
    height: 100%;
    padding: 2px;
    margin-left: 10px;
    font-size: 15px;
    font-family: poppins, sans-serif;
    font-weight: 400;

    &:focus {
      outline: none;
    }

    &::placeholder {
      opacity: 0.5;
      font-family: "Poppins", sans-serif;
    }
  }
`;

//       Categories

const Container = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  margin: 20px 120px;
`;

const Browse = styled.div`
  padding: 10px;
  font-family: poppins, sans-serif;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;

  & > a {
    margin-right: 10px;
  }
`;

const Popular = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export default Home;
