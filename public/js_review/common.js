export const arr = [10, 20, 30, 40];
export {info, info2, info3, call};

const info = 100;
const info2 = "백점";
const info3 = {name: "홍길동", age: 20};

export default function call() {
    return "common에서 만든 함수";
}

alert("common.js가 load됩니다.");