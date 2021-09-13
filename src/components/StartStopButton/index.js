import React from "react";
import { StyledButton } from "./StartStopButton.styles";
import StartStopIcon from "../../images/play_pause_icon.svg";

const StartStopButton = ({ onClick }) => {
  return (
    <StyledButton>
      <img
        src={StartStopIcon}
        alt="start stop icon"
        className="filter-myYellow"
        onClick={onClick}
      />
    </StyledButton>
  );
};

export default StartStopButton;
