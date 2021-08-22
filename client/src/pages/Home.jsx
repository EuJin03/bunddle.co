import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

import Card from "../components/Card";

import SearchIcon from "@material-ui/icons/Search";

const Home = () => {
  const [scrollPosition, setPosition] = useState(0);
  const [toggle, setToggle] = useState(false);

  const Search = styled.div`
    margin-top: 10px;
    width: 100%;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: ${toggle ? "fixed" : "block"};
    ${toggle && "top: 10px; width: 30%;"}

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

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    console.log(scrollPosition);
    updatePosition();

    if (scrollPosition > 270) {
      setToggle(true);
    } else {
      setToggle(false);
    }

    return () => window.removeEventListener("scroll", updatePosition);
  }, [scrollPosition]);

  const handleClick = () => {
    return;
  };

  return (
    <>
      <Top>
        <Nav>
          <Link to={`/signup`}>
            <Button>Sign Up</Button>
          </Link>
          <Link to={`/seller`}>
            <Button>Start Selling</Button>
          </Link>

          <Button>En</Button>
        </Nav>
        <Title>
          <h1>Bunddle</h1>
          <span>Buy and sell digital goods</span>
          <Search>
            <SearchIcon />
            <input type="text" placeholder="What are you looking for?" />
          </Search>
        </Title>
        <div className="padding"></div>
      </Top>
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
          </CardWrapper>
        </Popular>
      </Container>
    </>
  );
};

const Top = styled.div`
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

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;

  button {
    color: #ffffff;
  }

  a > button {
    color: #ffffff;
    padding: 16px;
    font-size: 16px;
    text-transform: capitalize;
  }

  a:nth-child(2) > button > .MuiButton-label {
    color: #7cdf96;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  min-width: 300px;
  font-family: "Poppins", sans-serif;

  h1 {
    letter-spacing: -6px;
    font-weight: 500;
    font-size: 88px;
    margin: 0;
    user-select: none;
  }

  span {
    font-size: 18px;
    margin-top: -15px;
    padding: 0 0 20px;
  }
`;

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
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  grid-gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export default Home;
