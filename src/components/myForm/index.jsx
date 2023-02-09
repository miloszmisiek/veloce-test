import React, { useState } from "react";
import MyButton from "../myButton";
import MyInput from "../myInput";

function MyForm({ tableData, setTableData }) {
  const [inputData, setInputData] = useState({
    nazwa: "",
    kwota: "",
  });
  const { nazwa, kwota } = inputData;

  const handleSubmit = (e) => {
    e.preventDefault();

    setTableData([
      ...tableData,
      {
        ...inputData,
        saldo:
          tableData?.reduce((a, b) => a + parseFloat(b.kwota), 0) +
          parseFloat(kwota),
      },
    ]);

    setInputData({
      nazwa: "",
      kwota: "",
    });
  };

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <MyInput
        placeHolder="Nazwa"
        inputType="text"
        inputValue={nazwa}
        inputName="nazwa"
        changeHandler={handleChange}
      />
      <MyInput
        placeHolder="Kwota"
        inputType="number"
        inputStep="0.01"
        inputValue={kwota}
        inputName="kwota"
        changeHandler={handleChange}
      />
      <MyButton placeHolder="WYKONAJ" buttonType="submit" bgColor="lightgreen"/>
    </form>
  );
}

export default MyForm;
