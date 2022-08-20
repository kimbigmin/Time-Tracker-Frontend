import { Container } from "./style";
import logo from "../../assets/images/Time_Tracker_logo.png";
import * as React from "react";

function Footer() {
  return (
    <Container>
      <img src={logo} alt="logo"></img>
      <p>Made by kimbigmin</p>
      <p>GitHub - https://github.com/kimbigmin</p>
    </Container>
  );
}

export default React.memo(Footer);
