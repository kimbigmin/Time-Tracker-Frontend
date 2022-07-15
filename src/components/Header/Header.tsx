import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import logo from "../../assets/images/Time_Tracker_logo.png";

function Header() {
  const handlerLogOut = () => {
    if (window.confirm("정말 로그아웃 하시겠습니까?")) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, {
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
        <Link to="/main">
          <img src={logo} alt="logo"></img>
        </Link>
      </h1>
      <div>
        <span onClick={handlerLogOut}>LOGOUT</span>
      </div>
    </StyledHeader>
  );
}

export default Header;
