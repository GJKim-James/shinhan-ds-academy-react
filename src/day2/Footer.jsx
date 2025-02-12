import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props); // 생성자에서 코드를 하고 싶다면 부모(super)를 호출해야한다.(자식이 코드가 추가되면 반드시 부모를 생성해야함)
        console.log("Footer 생성");
    }

    // class component에서 render() 함수는 필수
    render() {
        return (
            <div>
                <h1>Footer입니다.</h1>
            </div>
        );
    }
}

export default Footer;