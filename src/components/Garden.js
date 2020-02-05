import React, { useState } from "react";
import styled from "styled-components";

import Aubergine from "../static/img/aubergine.svg";
import Brocolli from "../static/img/brocolli.svg";
import Carrot from "../static/img/carrot.svg";
import Cucumber from "../static/img/cucumber.svg";
import HotPepper from "../static/img/hot_pepper.svg";
import Leafs from "../static/img/leafs.svg";
import Maize from "../static/img/maize.svg";
import Potato from "../static/img/potato.svg";
import Skull from "../static/img/skull.svg";
import SweetPotato from "../static/img/sweetpotato.svg";
import Tomato from "../static/img/tomato.svg";

import Vegetables from "./Vegetables";
import data from "../views/data.js";

const Container = styled.div`
  width: 480px;
  display: flex;
  flex-wrap: wrap;
`;



const Garden = ({ position }) => {






  return (
    <Container>
      {data.map(item => (
        <Vegetables
          isActive={position}
          id={item.id}
          type={Tomato}
          dead={item.isDead}
          active={item.isActive}
        />
      ))}
    </Container>
  );
};

export default Garden;
