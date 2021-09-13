import React from "react";
import { Wrapper } from "./Clock.styles";

const Clock = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Clock;
