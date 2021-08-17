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

//       Nav Bar

export const NavBar = styled.div`
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

  ${({ isScrolled }) =>
    isScrolled &&
    `
    background: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  `}
`;

///// Nav bar logo /////

export const NavBarLogo = styled.div`
  letter-spacing: -2px;
  font-weight: 500;
  font-size: 30px;
  margin: 10px;
  user-select: none;
  margin-left: 30px;
  color: #fff;
  transition: all 0.1s ease-in-out;

  ${({ isScrolled }) =>
    isScrolled &&
    `
    color: #2fe070;
  `}
`;

///// Nav Bar Button /////

export const NavBarButtonsWrapper = styled.div`
  margin-right: 30px;
`;

export const NavBarButton = styled.div`
  display: inline;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  transition: all 0.1s ease-in-out;
  display: inline-block;

  &:hover {
    color: #2fe070;
    transform: translateY(-0.2em);
  }

  ${({ isScrolled }) =>
    isScrolled &&
    `
    color: #000;
  `}

  &.start-selling-button {
    color: #7efcac;
    font-weight: 600;

    &:hover {
      color: #4fc279;
    }

    ${({ isScrolled }) =>
      isScrolled &&
      `
    color: #2fe070;
  `}
  }
`;

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

///// Footer /////

export const Footer = styled.div`
  background: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 40px 400px;
  text-align: center;
  width: 100%;

  .emailRedirect {
    color: #2fe070;
  }

  @media (max-width: 1630px) and (min-width: ${size.laptop}) {
    padding: 40px 200px;
  }

  @media ${device.tablet} {
    padding: 40px 130px;
  }

  @media ${device.mobileL} {
    padding: 40px 70px;
  }

  @media ${device.mobileM} {
    padding: 40px 50px;
  }

  @media ${device.mobileS} {
    padding: 40px 30px;
  }
`;

export const FooterLogo = styled.div`
  letter-spacing: -2px;
  font-weight: 500;
  font-size: 30px;
  user-select: none;
  color: #2fe070;
  margin-bottom: 40px;
  text-align: center;
`;

export const FooterColumn = styled.div`
  display: inline-block;
  width: 33.33%;
  text-align: center;
  vertical-align: top;
  table-layout: fixed;
  margin-bottom: 40px;

  span {
    font-weight: 600;
    display: block;
    margin-bottom: 30px;
  }

  a {
    display: block;
    width: 100%;
    margin: 12px auto;
    color: #595959;
  }

  a:active {
    color: #2fe070;
  }
`;

export const FooterSocialMedia = styled.div`
  margin-top: 30px;
  text-align: center;

  a {
    margin: 10px;
    color: #000;
  }

  a:active {
    color: #2fe070;
  }
`;

export const FooterLegals = styled.div`
  width: 100%;
  margin: 30px auto;
  text-align: center;

  span {
    color: #595959;
    margin: 0 10px;
  }

  a {
    margin: 0 10px;
    color: #000;
  }

  a:active {
    color: #2fe070;
  }
`;
