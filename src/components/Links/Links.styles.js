import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 6px;
  width: var(--width);
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;

    img {
      width: 34px;
    }

    p {
      font-family: "Gloria Hallelujah", cursive;
      font-style: italic;
      color: #fafafa;
      font-size: 24px;
      margin: 0;
    }
  }

  @media screen and (max-width: 600px) {
    width: 400px;
  }
`;

export const MyLogo = styled.span`
  font-family: 'Digital-7 Mono', 'Roboto', sans-serif;
  color: var(--myYellow);
  font-weight: 900;
  margin-right: 5px;
`;
