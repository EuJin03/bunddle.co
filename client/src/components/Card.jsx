import React from "react";
import styled from "styled-components";

import ImgSlider from "./ImgSlider";

const Card = () => {
  return (
    <>
      <CardStyle>
        <ImgSlider
          src="https://res.cloudinary.com/eujin03/image/upload/v1613504068/profile_rm9ivq.jpg"
          alt="img"
        />
        <div>
          <p>Lightroom preset - Dark & Moody</p>
          <div>
            <span>by Eugene</span>
            <span>
              <span>$</span>2000
            </span>
          </div>
        </div>
      </CardStyle>
    </>
  );
};

const CardStyle = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
  min-width: 230px;
  border-radius: 18px;
  height: 340px;
  background-color: #ffffff;
  border: 1px solid rgba(61, 61, 61, 0.2);
  box-shadow: 0 0 12px -4px rgba(0, 0, 0, 0.5);

  & > div {
    width: 90%;
    height: 100%;
    text-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  & > div > p {
    margin: 0;
  }

  & > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div > div > span:nth-child(1) {
    font-size: 14px;
  }

  & > div > div > span:nth-child(2) {
    font-size: 28px;
  }

  & > div > div > span:nth-child(2) > span {
    font-size: 14px;
  }
`;

export default Card;
