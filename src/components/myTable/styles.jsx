import styled from "styled-components";

export const TableWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    width: fit-content;
  }
`;

export const TableStyled = styled.table`
  table,
  th,
  td {
    border: 1px solid black;
    border-spacing: 0;
    border-collapse: collapse;
  }

  thead {
    background-color: lightgray;
    text-align: left;
  }

  th {
    padding-left: 0.5rem;
  }

  tbody td {
    padding-right: 0.5rem;
    text-align: right;
  }

  tbody > tr > :nth-child(1) {
    padding-right: 0;
    padding-left: 0.5rem;
    text-align: left;
  }
`;
