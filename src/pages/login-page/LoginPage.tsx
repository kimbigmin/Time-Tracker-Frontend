import * as React from "react";
import { Container, Box, Button } from "./style";
import logo from "../../assets/images/Time_Tracker_logo.png";

function LoginPage() {
  return (
    <Container>
      <Box>
        <img src={logo} alt="logo"></img>
        <p>test</p>
        <Button href="http://localhost:3000/auth/google">Google 로그인</Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
