import React from "react";
import { signin } from "login/service/ApiService";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault(); // default 이벤트 취소

    const data = new FormData(event.target);
    const username = data.get("username");
    const password = data.get("password");
    console.log({ username: username, password: password });

    // ApiService의 signin 메서드를 사용해 로그인
    signin({ mid: username, mpassword: password });
  };

  return (
    <div>
      <Link to={"/"} className='btn btn-dark mt-2'>◀️ Home으로</Link>
      <h1>로그인 Page</h1>

      <form method="post" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="username">사용자 ID</label>
          <input type="text" id="username" name="username" defaultValue="" />
        </p>
        <p>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" defaultValue="" />
        </p>

        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
    </div>
  );
}

export default Login;
