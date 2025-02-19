import React from "react";
import { signup } from "login/service/ApiService";
import { Link } from "react-router-dom";

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
    const data = new FormData(event.target);
    const mid = data.get("mid");
    const mname = data.get("mname");
    const mpassword = data.get("mpassword");
    const mrole = data.get("mrole");
    signup({ mid: mid, mname, mpassword, mrole }).then((response) => {
      // 계정 생성 성공 시 login 페이지로 리다이렉트

      window.location.href = "/login";
    });
  };

  return (
    <>
      <Link to={"/"} className='btn btn-dark mt-2'>◀️ Home으로</Link>
      <h2>회원가입</h2>
      <form method="post" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="mid">mid</label>
          <input type="text" id="mid" name="mid" />
        </p>
        <p>
          <label htmlFor="mname">mname</label>
          <input type="text" id="mname" name="mname" />
        </p>
        <p>
          <label htmlFor="mpassword">mpassword</label>
          <input type="password" id="mpassword" name="mpassword" />
        </p>
        <p>
          <input type="radio" name="mrole" defaultValue="ADMIN" />ADMIN
          <input type="radio" name="mrole" defaultValue="MANAGER" />MANAGER
          <input type="radio" name="mrole" defaultValue="USER" defaultChecked="checked" />USER
        </p>

        <button className="btn btn-success mb-2">가입</button>
      </form>
      <Link to="/login" variant="body2">
        이미 계정이 있습니까? 로그인 하세요.
      </Link>
    </>
  );
}

export default SignUp;
