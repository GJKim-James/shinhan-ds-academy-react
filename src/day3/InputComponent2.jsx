import React, { Component } from 'react';

// 상태 관리; 클래스형인 경우는 setState()로 관리리
class InputComponent2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "김광진", age: 0, birth: null, introduce: "", // 초기값 설정
            f1: function() { console.log("1: " + this.state.name); }, // this : window
            f2: () => { console.log("2: " + this.state.name); }
        };
        this.state.f3 = function() { console.log("3: " + this.state.name); }
        this.state.f4 = () => { console.log("4: " + this.state.name); }

        // 선언적 함수이면 this가 이 객체(현재 클래스)임을 binding 해야한다.
        // 화살표 함수는 this가 자동으로 binding 된다.
        this.state.f1 = this.state.f1.bind(this);
        this.state.f3 = this.state.f3.bind(this);
    }

    f5() { console.log("5: " + this.state.name); }
    f6 = () => { console.log("6: " + this.state.name); }

    // nameChangeHandler = (e) => {
    //     this.setState({ name: e.target.value });
    // };
    // ageChangeHandler = (e) => {
    //     this.setState({ age: e.target.value });
    // };
    // birthChangeHandler = (e) => {
    //     this.setState({ birth: e.target.value });
    // };
    // introChangeHandler = (e) => {
    //     this.setState({ introduce: e.target.value });
    // };
    valueChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { name, age, birth, introduce } = this.state;

        return (
            <div>
                <div>이름 : <input type="text" name="name" onChange={ this.valueChangeHandler } value={ name } /></div>
                <div>나이 : <input type="number" name="age" onChange={ this.valueChangeHandler } value={ age } /></div>
                <div>생일 : <input type="date" name="birth" onChange={ this.valueChangeHandler } /></div>
                <div>소개 : <textarea rows={5} cols={80} name="introduce" onChange={ this.valueChangeHandler }></textarea></div>

                <div>
                    <h1>결과</h1>
                    <ul>
                        <li>{ name }</li>
                        <li>{ age }</li>
                        <li>{ birth }</li>
                        <li>{ introduce }</li>
                    </ul>
                </div>
                <hr />

                <h1>함수 호출</h1>
                <p>{this.state.f1()}</p>
                <p>{this.state.f2()}</p>
                <p>{this.state.f3()}</p>
                <p>{this.state.f4()}</p>
                <p>{this.f5()}</p>
                <p>{this.f6()}</p>
            </div>
        );
    }
}

export default InputComponent2;