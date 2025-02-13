import { Component } from 'react';

class LifeCycleChild extends Component {
    constructor(props) {
        super(props); // constructor() 메소드는 코드 추가 시 반드시 super() 호출해야함
        console.log("LifeCycleChild constructor");
    }

    componentDidMount() {
        console.log("LifeCycleChild componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifeCycleChild shouldComponentUpdate");
        
        return true; // true이면 기존 값이 새로운 값으로 수정되었음을 의미
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("LifeCycleChild componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("LifeCycleChild componentWillUnmount");
    }

    render() {
        console.log("LifeCycleChild render(render 메소드는 필수)");

        return (
            <div>
                <h1>자식 영역입니다. / 부모에게 전달받은 속성 : {this.props.title}</h1>
            </div>
        );
    }
}

export default LifeCycleChild;