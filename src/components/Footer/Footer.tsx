import * as react from "react";
import { Container } from "./style";
import logo from "../../assets/images/Time_Tracker_logo.png";

function Footer() {
  return (
    <Container>
      <img src={logo} alt="logo"></img>
      <p>Made by kimbigmin</p>
      <p>GitHub - https://github.com/kimbigmin</p>
    </Container>
  );
}

export default Footer;
