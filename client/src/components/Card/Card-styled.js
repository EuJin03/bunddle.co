import styled from "styled-components";

export const CardStyle = styled.div`
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
