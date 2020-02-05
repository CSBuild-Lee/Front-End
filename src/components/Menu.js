import React from "react";
import styled from "styled-components";
import KeyBlock from "./KeyBlock";

const Container = styled.div`
  height: 475px;
  width: 275px;
  padding: 8px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Menu = ({ moveLeft, moveRight, moveDown, moveUp }) => {
  return (
    <Container>
      <b>Rules</b>
      <p>Heasdfadfasdfasdfasdfa</p>
      <hr />
      <Info>
        <span>Killed crops</span>
        <span>5</span>
      </Info>
      <Info>
        <span>Calories</span>
        <span>200/500</span>
      </Info>
      <hr />
      <Info>
        <span>Navigation</span>
        <KeyBlock
          moveLeft={moveLeft}
          moveRight={moveRight}
          moveDown={moveDown}
          moveUp={moveUp}
        />
      </Info>
    </Container>
  );
};

export default Menu;
