import styled from "styled-components";

///// Media Query /////

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileM}) and (min-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileL}) and (min-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.tablet}) and (min-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.laptop}) and (min-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptopL}) and (min-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.desktop}) and (min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

///// Styles /////

//       Header

export const Hero = styled.div`
  width: 100%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // background: rgb(61, 61, 61);
  // background: linear-gradient(
  //   126deg,
  //   rgba(61, 61, 61, 1) 0%,
  //   rgba(74, 74, 74, 1) 25%,
  //   rgba(61, 61, 61, 1) 50%,
  //   rgba(66, 75, 67, 1) 75%,
  //   rgba(61, 61, 61, 1) 100%
  // );

  background-color: #0b89bf;
  background-image: linear-gradient(300deg, #0b89bf 0%, #2fe070 74%);

  color: #f1f1f1;

  .padding {
    padding-top: 80px;
  }
`;

export const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins", sans-serif;
  margin: auto 0;
  text-align: center;
  max-width: 80%;

  h1 {
    letter-spacing: -6px;
    font-weight: 700;
    font-size: 88px;
    margin: 0;
  }

  span {
    font-size: 18px;
    margin-top: 10px;
    padding: 0 0 20px;
  }

  @media (max-width: 550px) and (min-width: ${size.mobileS}) {
    h1 {
      font-size: 60px;
    }
  }
`;

export const HeroSearch = styled.div`
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

export const Container = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  margin: 20px 120px;
`;

export const BrowseCategories = styled.div`
  padding: 10px;
  font-family: poppins, sans-serif;
`;

export const BrowseCategoriesButtons = styled.div`
  display: flex;
  align-items: center;

  & > a {
    margin-right: 10px;
  }
`;

export const PopularSection = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
