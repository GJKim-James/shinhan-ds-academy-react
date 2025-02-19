const ACCESS_TOKEN = "ACCESS_TOKEN";

// 1. URL, 2. 요청 방식 3. 요청 시 보낼 data
export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    url: api, // Spring Boot 서버의 주소
    method: method,
  };

  // 조회는 요청 data가 없음, 입력과 수정 시에는 보내는 data 있음
  if (request) {
    // GET method
    console.log("요청 data : ", request);
    options.body = JSON.stringify(request); // "{}"; json을 문자열로 바꿔줌
    console.log("json 변경 : ", options);
  }

  // 비동기 통신 : axios, ajax, fetch, promise...
  // 로그인 했을 때는 mid와 token이 옴; {속성: {login: "gjkim5", token: "eyJhbGciOiJIUzI1NiJ9.eyJtZW1"}}
  // response는 promise 객체가 온다.
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => { // promise 객체를 json으로 바꿔줌
        console.log(json);
        if (!response.ok) {
          // response.ok가 true이면 정상적인 리스폰스를 받은 것, 아니면 에러 리스폰스를 받은 것.
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      console.log(error.status);
      if (error.status === undefined || error.status === 403) {
        window.location.href = "/login"; // redirect, react 주소
      }
      return Promise.reject(error);
    });
}

// userDTO = {mid:"", mpassword:""}
export function signin(userDTO) {
  console.log(userDTO);
  // http://localhost:7777/shinhan/auth/login
  return call("/auth/login", "POST", userDTO).then((response) => {
    console.log(response);
    if (response.token) { // 토큰이 있으면(로그인이 되면)
      // 로컬 스토리지에 토큰 저장
      localStorage.setItem(ACCESS_TOKEN, response.token);
      localStorage.setItem("login", response.login);
      // token이 존재하는 경우 Todo 화면으로 리다이렉트
      window.location.href = "/webboard/list";
    }
  });
}

export function signout() {
  localStorage.setItem(ACCESS_TOKEN, null);
  localStorage.setItem("login", null);
  window.location.href = "/login";
}

export function signup(userDTO) {
  return call("/auth/signup", "POST", userDTO);
}