import { createGlobalStyle } from "styled-components"
import Normalize from './normalize'


// Styles

export default createGlobalStyle`
  ${Normalize}

  body {
    background-color: white;
  }
`
