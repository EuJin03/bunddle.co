import styled from "styled-components";

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
