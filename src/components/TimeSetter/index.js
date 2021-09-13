import React from "react";
import { Control, Wrapper, StyledButton } from "./TimeSetter.styles";

const TimeSetter = ({ timeSetterType, length, onPlusClick, onMinusClick }) => {
  return (
    <Wrapper>
      <h3>{timeSetterType}</h3>
      <Control>
        <StyledButton onClick={onMinusClick}><span>-</span></StyledButton>
        <span>{length}</span>
        <StyledButton onClick={onPlusClick}><span>+</span></StyledButton>
      </Control>
    </Wrapper>
  );
};

export default TimeSetter;
