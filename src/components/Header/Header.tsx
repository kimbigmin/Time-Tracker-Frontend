import * as React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./style";

function Header() {
  const handlerLogOut = () => {
    if (window.confirm("정말 로그아웃 하시겠습니까?")) {
      fetch("http://localhost:3000/auth/logout", {
        method: "GET",
        credentials: "include",
      }).then((res) => {
        window.location.reload();
      });
    }
  };

  return (
    <StyledHeader>
      <h1>
        <Link to="/main">Time Tracker</Link>
      </h1>
      <div>
        <span onClick={handlerLogOut}>LOGOUT</span>
      </div>
    </StyledHeader>
  );
}

export default Header;
