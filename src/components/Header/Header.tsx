import * as React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./style";

function Header() {
  return (
    <StyledHeader>
      <h1>
        <Link to="/main">Time Tracker</Link>
      </h1>
      <div>
        <a>
          <i className="fas fa-user-circle"></i>
        </a>
        {}
      </div>
    </StyledHeader>
  );
}

export default Header;
