import React, { useState } from "react";
import styled from "styled-components";

import Aubergine from "../static/img/aubergine.svg";
import Skull from "../static/img/skull.svg";
import Bug from "../static/img/bug.svg";

const Container = styled.div`
  margin: 4px;
  border-radius: 5px;
  cursor: pointer;
`;
const Image = styled.img`
  height: 40px;
  width: 40px;
`;

const Vegetables = ({ isActive, type, active, dead, image, id }) => {
  const [isDead, setIsDead] = useState(dead);
  const value = 45;

  if (isActive === id) {
    return (
      <Container>
        <Image src={Bug} alt="" />
      </Container>
    );
  }

  if (!isDead) {
    return (
      <Container>
        <Image src={type} alt="" />
      </Container>
    );
  } else
    return (
      <Container>
        <Image src={Skull} alt="" />
      </Container>
    );
};

export default Vegetables;
