import React from 'react';
import "day2/external.css" // 외부 css 적용
import { Button } from 'react-bootstrap'; // react bootstrap Button

export const myscore = 100;

function Header(props) {
    console.log("Header 생성");

    const inlineStyle = {
        border: "2px solid blue",
        color: "orange"
    }

    return (
        <div style={{border: "5px dotted red"}}>
            <h1 className='myStyle'>Header(JSX 문법)/{myscore}(자바스크립트 문법은 &#123;&#125; 안에)</h1>
            <h1 className='myStyle2'>Header(css 연습)</h1>
            <h1 style={inlineStyle}>inline style 적용</h1>
            <hr />

            <h1>React에서 Bootstrap 사용해보기</h1>
            <h3>react-bootstrap</h3>
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-light">Light</Button>
            <Button variant="outline-dark">Dark</Button>

            <h3>bootstrap css</h3>
            <Button className='btn btn-primary'>버튼 css 주기</Button>
            <Button value="버튼2">버튼 value</Button>
        </div>
    );
}

export function Header2(props) {
    console.log("Header2 생성");

    return (
        <div>
            <h1>Header2(JSX 문법)</h1>
        </div>
    );
}

export default Header;