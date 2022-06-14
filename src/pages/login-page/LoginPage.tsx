import * as React from "react";
import { Container, Box, Button } from "./style";
import logo from "../../assets/images/Time_Tracker_logo.png";

function LoginPage() {
  return (
    <Container>
      <Box>
        <img src={logo} alt="logo"></img>
        <Button href="http://ec2-13-125-194-99.ap-northeast-2.compute.amazonaws.com/api/auth/google">
          Google 로그인 test?
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
