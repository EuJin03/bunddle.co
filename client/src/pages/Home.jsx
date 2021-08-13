import React from "react";
import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";

const Home = () => {
  return (
    <>
      <Top>
        <Nav>
          <span>Sign Up</span>
          <span>Start Selling</span>
        </Nav>
        <Title>
          <h1>Bunddle</h1>
          <span>Buy and sell digital goods</span>
          <Search>
            <SearchIcon />
            <input type="text" placeholder="Search Bunddle" />
          </Search>
        </Title>
        <div className="padding"></div>
      </Top>
    </>
  );
};

const Top = styled.div`
  width: 100%;
  height: 75vh;
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

  span {
    padding: 18px;
    font-size: 18px;
  }

  span:nth-child(2) {
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

  h1 {
    font-family: "Poppins", sans-serif;
    letter-spacing: -6px;
    font-weight: 500;
    font-size: 70px;
    margin: 0;
  }

  span {
    font-size: 18px;
    margin-top: -15px;
    padding: 0 0 20px;
  }
`;

const Search = styled.div`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    color: #000000;
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

    &:focus {
      outline: none;
    }
  }
`;

export default Home;
