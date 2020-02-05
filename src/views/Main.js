import React, { useState } from "react";
import styled from "styled-components";

import Garden from "../components/Garden";
import Menu from "../components/Menu";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  const [position, setPosition] = useState(5);

  const moveLeft = () => {
    setPosition(position - 1);
  };

  const moveRight = () => {
    setPosition(position + 1);
  };

  const moveUp = () => {
    setPosition(position - 10);
  };

  const moveDown = () => {
    setPosition(position + 10);
  };

  return (
    <Container>
      <Garden position={position} />
      <Menu
        moveLeft={moveLeft}
        moveRight={moveRight}
        moveDown={moveDown}
        moveUp={moveUp}
      />
    </Container>
  );
};

export default Main;
