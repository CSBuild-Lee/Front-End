import React from "react";
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
  return (
    <Container>
      <Garden />
      {/* <Menu /> */}
    </Container>
  );
};

export default Main;
