import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <>
      <CardStyle>
        <img
          src="https://cdn.discordapp.com/attachments/789102390011494405/875676743002890260/Perfect_Tones_Lightroom_Preset.jpg"
          alt="helo"
        />
        <div>
          <p>Lightroom preset - Dark & Moody</p>
          <div>
            <span>by Eugene</span>
            <span>
              <span>$</span>20
            </span>
          </div>
        </div>
      </CardStyle>
    </>
  );
};

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 230px;
  margin: 10px;
  border-radius: 18px;
  height: 340px;
  background-color: #ffffff;
  border: 1px solid rgba(61, 61, 61, 0.2);
  box-shadow: 0 0 12px -4px rgba(0, 0, 0, 0.5);

  & > img {
    object-fit: cover;
    width: 100%;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    max-height: 230px;
  }

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
