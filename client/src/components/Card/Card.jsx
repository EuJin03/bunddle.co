import React from "react";
import * as S from "./Card-styled";

const Card = () => {
  return (
    <>
      <S.CardStyle>
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
      </S.CardStyle>
    </>
  );
};

export default Card;
