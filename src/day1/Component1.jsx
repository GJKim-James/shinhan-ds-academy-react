import React from 'react';

function Component1(props) {
    console.log("Component1");
    return (
        <div>
            <h1>제목</h1>
            <div>
                <h1>Function Component이다.</h1>
                <p>function 이름은 반드시 대문자이어야 한다.</p>
                <p>지금 쓰고 있는 부분은 HTML이 아니라 XML이다. JSX(JavaScript XML)</p>
                <p>반드시 root는 하나이어야 한다.</p>
            </div>
        </div>
    );
}

export default Component1;