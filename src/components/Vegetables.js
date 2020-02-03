import React from "react";
import styled from "styled-components";

import Aubergine from '../static/img/aubergine.svg'

const Container = styled.img`
    margin: 4px;
    height: 40px;
    width: 40px;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        background: red;
    }
`

const Vegetables = ({type}) => {
  return (
    <Container src={type} alt="" >
      
    </Container>
  );
};

export default Vegetables;
