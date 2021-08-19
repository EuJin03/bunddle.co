import styled from "styled-components";

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
