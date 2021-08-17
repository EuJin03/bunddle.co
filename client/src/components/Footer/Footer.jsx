import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Footer-styled";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <>
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

export default Footer;
