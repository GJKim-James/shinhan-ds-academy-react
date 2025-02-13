import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import InputMemberComponent from "day3/InputMemberComponent";
import DisplayMemberComponent from "./DisplayMemberComponent";

// function FormComponent2() {}와 같다
const FormComponent2 = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [member, setMember] = useState({name: name, age: age});
  const [memberList, setMemberList] = useState([]);

  // useRef 리액트 함수 이용해 DOM 요소 조작
  const nameRef = useRef();
  const ageRef = useRef();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    // console.log(name); // setter는 비동기이기 때문에 바뀐 name이 찍히는 것이 아니라, 기존 name이 찍힘
    setMember({...member, name: e.target.value}); // 전개 연산자(Object 합치기)
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    setMember({...member, age: event.target.value}); // 전개 연산자(Object 합치기)
  };

  // 위 코드에서 반복되는 부분을 줄이기 위해 생성
  const memberChangeHandler = (e) => {
    setMember({...member, [e.target.name]: e.target.value}); // 전개 연산자(Object 합치기)
    // [e.target.name] : 가변이기 때문에 태그의 name 속성을 가져옴
  };

  // 제출 클릭 시 기존 memberList에 member 추가
  const submitHandler = (e) => {
    // 제출 클릭(서버 전송) 시 Form의 action이 없어서 현재 페이지 재호출하는데 재호출하면 memberList를 빈 배열로 초기화하는 로직이 있기 때문에 아무것도 추가되지 않음
    // 그래서 default event를 막아줘야 함
    e.preventDefault(); // default event 취소
    setMemberList([...memberList, member]);
    nameRef.current.value=""; // Ref를 이용해서 DOM 객체에 접근
    ageRef.current.value="";
    nameRef.current.focus();
  };

  useEffect(() => {
    console.log("페이지 load 시 수행됨");
    nameRef.current.focus(); // 이름 칸에 포커스
  }, []); // []는 의존 배열, 비어있으면 최초 rendering할 때만 발생

  // function component의 lifecycle(생성부터 소멸까지) 관리하는 Hook(class 기능을 함수로 제공)
  useEffect(() => {
    console.log("처음 render 시, 다시 rendering 시마다 발생(의존 배열 없음; 무조건 발생)");
  });

  useEffect(() => {
    console.log("처음 render 시, member 변경할 때마다 발생");
  }, [member]);

  useEffect(() => {
    console.log("처음 render 시, memberList 변경할 때마다 발생");
  }, [memberList]);

  useEffect(() => {
    console.log("처음 render 시, member, memberList 변경할 때마다 발생");
  }, [member, memberList]);

  var propObj = {submitHandler, nameRef, ageRef, memberChangeHandler, member}; // submitHandler:submitHandler 원래는 이런 식
  return (
    <>
      <InputMemberComponent {...propObj}></InputMemberComponent>
      <DisplayMemberComponent memberList={memberList}></DisplayMemberComponent>
    </>
  );
};

export default FormComponent2;
