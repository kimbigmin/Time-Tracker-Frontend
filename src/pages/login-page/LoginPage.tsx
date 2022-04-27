import * as React from "react";

function LoginPage() {
  const logoutHandler = () => {
    fetch("http://localhost:3000/auth/logout", {
      method: "DELETE",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <form>
        <a href="http://localhost:3000/auth/google">구글 로그인</a>
        <button onClick={logoutHandler}>로그아웃</button>
      </form>
    </div>
  );
}

export default LoginPage;
