import React from "react";
import { StyledButton } from "./ResetButton.styles";

const ResetButton = ({ onClick }) => {
  return <StyledButton id="reset" onClick={onClick}><i className="fas fa-sync-alt"></i></StyledButton>;
};

export default ResetButton;
