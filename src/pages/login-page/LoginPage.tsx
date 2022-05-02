import * as React from "react";
import { Container, Box, Button } from "./style";
import logo from "./Time_Tracker_logo.png";

function LoginPage() {
  return (
    <Container>
      <Box>
        <img src={logo} alt="logo"></img>
        <Button href="http://localhost:3000/auth/google">Google 로그인</Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
