import styled from "styled-components";

export const Wrapper = styled.div`
  width: var(--width);
  padding: 20px;
  border-radius: 10px;
  background-color: var(--palatinateBlue);
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 600px) {
    width: 400px;
  }

  h1 {
    font-size: 52px;
    margin: 6px;
    text-align: center;

    @media screen and (max-width: 600px) {
      font-size: 44px;
    }
  }
`;

export const TimeSettersWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
