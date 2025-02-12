import React from 'react';

// 부모(Day2App)는 '<FunctionComponent2 title="" price="">내용</FunctionComponent2>' 이렇게 사용
// 자식 Component
function FunctionComponent2({ title="국민", price=500, subject=["A", "B", "C"], children }) { // default 값 설정
    return (
        <div>
            <h1>FunctionComponent2</h1>
            <p>title : {title}</p>
            <p>price : {price}</p>
            <p>children : {children}</p>
            <ul>
                {subject && subject.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default FunctionComponent2;