import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 10px solid var(--myYellow);
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  background-color: var(--midnightBlue);

  #time-left {
    font-size: 140px;
    color: var(--myYellow);
    font-family: "Digital-7 Mono", "Roboto", sans-serif;
    font-weight: normal;
    margin: 0;
  }

  #timer-label {
    font-size: 60px;
    color: var(--myYellow);
    font-family: "Digital-7 Mono", "Roboto", sans-serif;
    font-weight: normal;
    margin: 0;
  }
`;
