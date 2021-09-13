import styled from "styled-components";

export const StyledButton = styled.button` 

  background-color: var(--midnightBlue);
  width: 90px;
  height: 90px;
  border-radius: 10px;
  padding: 8px;

  img {
    width: 70px;
  }

  .filter-myYellow {
    filter: invert(76%) sepia(51%) saturate(1014%) hue-rotate(357deg) brightness(99%) contrast(107%);
  }
`;