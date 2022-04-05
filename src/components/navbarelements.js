
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export const Bars = styled(FaBars)`

  display: none;
  color: rgb;
  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

`;
