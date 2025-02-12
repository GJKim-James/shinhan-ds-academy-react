import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// 클래스형 컴포넌트로 상태 관리
class Counter3 extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, message: "class로 상태 관리"};

        // this.clickHandler2 = () => {}; // 생성자 안에 clickHandler 선언하고 싶을 경우 this 사용
    }

    clickHandler = (event) => {
        var text = event.target.innerHTML; // 더하기 or 빼기
        console.log(text);

        if (text === "더하기") {
            // this.setState(this.state.count + 1);
            this.setState({ count: this.state.count + 1, message: "증가함" });
        } else {
            // this.setState(this.state.count - 1);
            this.setState({ count: this.state.count - 1, message: "감소함" });
        }
    };

    render() {
        return (
            <div>
                <h1>현재 값 : {this.state.count} ({this.state.message})</h1>
                <Button variant='info' onClick={ () => this.setState({ count: this.state.count + 1}) } className='me-2'>+</Button>
                <Button variant='warning' onClick={ () => this.setState({ count: this.state.count - 1}) } className='me-2'>-</Button>
                <Button variant='info' onClick={ this.clickHandler } className='me-2'>더하기</Button>
                <Button variant='warning' onClick={ this.clickHandler }>빼기</Button>
            </div>
        );
    }
}

export default Counter3;