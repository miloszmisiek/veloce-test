import React, { useState } from "react";
import MyButton from "../myButton";
import { TableStyled, TableWrapper } from "./styles";

function MyTable({ tableData }) {
  const [isVisible, setIsVisible] = useState(true);
  const clickHandler = () => setIsVisible((prev) => !prev);

  return (
    <TableWrapper>
      <MyButton
        placeHolder={isVisible ? "UKRYJ" : "POKA\u017B"}
        buttonType="button"
        clickHandler={clickHandler}
        bgColor="#ff8886"
      />
      {isVisible && (
        <TableStyled cellSpacing="0">
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Kwota</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item, idx) => (
              <tr key={idx}>
                <td>{item.nazwa}</td>
                <td>{parseFloat(item.kwota).toFixed(2).replace(".", ",")} z&#322;</td>
                <td>{parseFloat(item.saldo).toFixed(2).replace(".", ",")} z&#322;</td>
              </tr>
            ))}
          </tbody>
        </TableStyled>
      )}
    </TableWrapper>
  );
}
export default MyTable;
