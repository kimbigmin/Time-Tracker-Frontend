import * as React from "react";

function LoginPage() {
  const logoutHandler = () => {
    fetch("http://localhost:3000/time/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ test: "dfdf" }),
    }).then((res) => console.log(res));
  };

  const test = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/time/yR9AxWYnhd5xKRGB6SVRv", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div>
      <form>
        <a href="http://localhost:3000/auth/google">구글 로그인</a>
        <button onClick={test}>로그아웃</button>
      </form>
    </div>
  );
}

export default LoginPage;
