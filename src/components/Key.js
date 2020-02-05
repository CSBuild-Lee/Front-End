import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: red;
  height: 40px;
  width: 40px;
  margin: 4px;
  cursor: pointer;

  :hover {
    background-color: black;
  }
`;



const Key = ({ children, fn }) => {
  return (
    <>
      <Container onClick={fn}>{children}</Container>
    </>
  );
};

export default Key;
