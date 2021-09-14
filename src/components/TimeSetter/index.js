import React from "react";
import { Control, Wrapper, StyledButton } from "./TimeSetter.styles";

const TimeSetter = ({ labelId, decrementId, incrementId, lengthId, timeSetterType, length, onPlusClick, onMinusClick }) => {
  return (
    <Wrapper>
      <h3 id={labelId}>{timeSetterType}</h3>
      <Control>
        <StyledButton id={decrementId} onClick={onMinusClick}><span>-</span></StyledButton>
        <span id={lengthId}>{length}</span>
        <StyledButton id={incrementId} onClick={onPlusClick}><span>+</span></StyledButton>
      </Control>
    </Wrapper>
  );
};

export default TimeSetter;
