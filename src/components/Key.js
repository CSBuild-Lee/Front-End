import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: red;
  height: 40px;
  width: 40px;
  margin: 4px;
  cursor: pointer;
`;

const Key = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Key;
