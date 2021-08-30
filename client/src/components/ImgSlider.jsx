import React from "react";
import styled from "styled-components";

const ImgSlider = ({ src, alt }) => {
  return (
    <>
      <Img src={src} alt={alt} />
    </>
  );
};

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  max-height: 230px;
`;

export default ImgSlider;
