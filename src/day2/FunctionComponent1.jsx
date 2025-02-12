import React from 'react';

// 부모(Day2App)는 '<FunctionComponent1 title="" price="">내용</FunctionComponent1>' 이렇게 사용
// 자식 Component
function FunctionComponent1(props) {
    const { title, price, children, subject } = props;
    return (
        <div>
            <h1>FunctionComponent1</h1>
            <p>title : {props.title}</p>
            <p>price : {props.price}</p>
            <p>children : {props.children}</p>
            <p>title : {title}</p>
            <p>price : {price}</p>
            <p>children : {children}</p>
            <ul>
                {/* subject가 존재하면 수행하기 */}
                {subject && subject.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default FunctionComponent1;