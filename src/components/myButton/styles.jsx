import styled from "styled-components";

export const ButtonStyled = styled.button`
  min-width: 100px;
  padding: 0.1rem 0;
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
  border: 1px solid black;
  border-radius: 5px;
`;
