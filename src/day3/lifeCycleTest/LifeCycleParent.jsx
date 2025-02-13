import { Component } from 'react';
import { Button } from 'react-bootstrap';
import LifeCycleChild from 'day3/lifeCycleTest/LifeCycleChild';

class LifeCycleParent extends Component {
    constructor(props) {
        super(props); // constructor() 메소드는 코드 추가 시 반드시 super() 호출해야함
        console.log("LifeCycleParent constructor");
        this.state = {title: "초기값", childVisible: false};
    }

    componentDidMount() {
        console.log("LifeCycleParent componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifeCycleParent shouldComponentUpdate");

        let result = (this.state.title !== nextState.title || this.state.childVisible !== nextState.childVisible);
        
        return result; // true이면 기존 값이 새로운 값으로 수정되었음을 의미
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("LifeCycleParent componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("LifeCycleParent componentWillUnmount");
    }

    changeTitleHandler = () => {
        this.setState({title: "title이 변경됨"});
    };
    changeChildVisibleHandler = () => {
        this.setState({childVisible: !this.state.childVisible});
    };
    render() {
        console.log("LifeCycleParent render(render 메소드는 필수)");

        return (
            <div>
                <h1>부모 영역입니다. {this.state.title}</h1>
                <Button onClick={this.changeTitleHandler}>(title) 변경1</Button>
                <Button onClick={this.changeChildVisibleHandler}>자식 보여주기</Button>
                {this.state.childVisible && <LifeCycleChild title={this.state.title}></LifeCycleChild>}
            </div>
        );
    }
}

export default LifeCycleParent;