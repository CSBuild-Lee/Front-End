import React from "react";
import styled from "styled-components";
import Key from "./Key";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

const KeyBlock = () => {
  return (
    <Container>
      <Key>Up</Key>
      <Row>
        <Key>Left</Key>
        <Key>Down</Key>
        <Key>Right</Key>
      </Row>
    </Container>
  );
};

export default KeyBlock;
