import * as React from "react";
import { Container, Box, Button } from "./style";
import logo from "../../assets/images/Time_Tracker_logo.png";

function LoginPage() {
  return (
    <Container>
      <Box>
        <img src={logo} alt="logo"></img>
        <Button href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}>
          Google 로그인
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
