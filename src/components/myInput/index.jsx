import React from "react";
import { InputStyled } from "./styles";

function MyInput(props) {
  const {
    placeHolder,
    inputType,
    inputName,
    inputValue,
    changeHandler,
    inputStep,
  } = props;

  return (
    <InputStyled
      type={inputType}
      step={inputStep}
      placeholder={placeHolder}
      value={inputValue}
      name={inputName}
      onChange={changeHandler}
      required
    />
  );
}

export default MyInput;
