import * as React from "react";
import { Container, Box, Button } from "./style";
import logo from "../../assets/images/Time_Tracker_logo.png";

function LoginPage() {
  return (
    <Container>
      <Box>
        <img src={logo} alt="logo"></img>
        <Button href="http://ec2-52-78-39-53.ap-northeast-2.compute.amazonaws.com/auth/google">
          Google 로그인
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
