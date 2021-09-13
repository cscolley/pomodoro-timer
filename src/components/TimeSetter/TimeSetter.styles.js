import styled from "styled-components";

export const Wrapper = styled.div`
  width: 180px;
  height: 86px;
  background-color: var(--myYellow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    width: 160px;
  }

  h3 {
    font-size: 24px;
    font-weight: 900;
    width: 100%;
    margin: 0;
    text-align: center;
    color: var(--midnightBlue);

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }
`;

export const Control = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    font-size: 44px;
    font-weight: 900;
    text-align: center;
    color: var(--midnightBlue);

    @media screen and (max-width: 600px) {
      font-size: 38px;
    }
  }
`;

export const StyledButton = styled.button`
  font-size: 50px;
  font-weight: 900;
  height: 50px;
  width: 50px;
  text-align: center;
  background-color: var(--midnightBlue);
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  span {
    color: var(--myYellow);
  }
`;
