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

const clickHandler = (children) => {
  alert(`This is the ${children} key`)
}

const KeyBlock = ({ moveLeft, moveRight, moveDown, moveUp }) => {
  return (
    <Container>
      <Key fn={moveUp}>Up</Key>
      <Row>
        <Key fn={moveLeft}>Left</Key>
        <Key fn={moveDown}>Down</Key>
        <Key fn={moveRight}>Right</Key>
      </Row>
    </Container>
  );
};

export default KeyBlock;
