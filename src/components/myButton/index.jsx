import React from "react";
import { ButtonStyled } from "./styles";

function MyButton(props) {
  const { placeHolder, buttonType, clickHandler, bgColor } = props;

  return (
    <ButtonStyled type={buttonType} onClick={clickHandler} bgColor={bgColor}>
      {placeHolder}
    </ButtonStyled>
  );
}

export default MyButton;
