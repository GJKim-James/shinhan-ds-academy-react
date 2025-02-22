import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "day4/reactmemo/Card";

const DUMMY_ARR = [
  { userid: 1, username: "jin1" },
  { userid: 2, username: "jin2" },
];
const KeyList = () => {
  const [arr, setArr] = useState(DUMMY_ARR);
  const nextUserId = useRef(3);

  // 함수 메모 , 최초 1회 []만 함수를 할당, useCallback를 사용하지 않으면 render될 때마다 다시 할당
  const handleClick = useCallback(() => {
    console.log("handleClick~~~");
  }, []); // 의존 배열이 비어있다면 최초 한 번 수행한다.

  // Test용, handleClick 메서드가 변경되었는지 확인하기 위해 추가
  useEffect(() => {
    console.log("handleClick메서드가 다시 만들어졌음");
  }, [handleClick]);

  return (
    <div>
      <h2>key가 index일 때와 유일한 값일 때의 차이</h2>
      {arr.map((item, index) => (
        <Card key={item.userid} item={item} handleClick={handleClick}></Card>
      ))}
      <button
        onClick={() => {
          setArr([
            {
              userid: `${nextUserId.current}`,
              username: `Hi~${nextUserId.current}`,
            },
            ...arr,
          ]);
          nextUserId.current += 1;
        }}
      >
        앞부분에 아이템 추가, Reindexing발생
      </button>
    </div>
  );
};

export default KeyList;
