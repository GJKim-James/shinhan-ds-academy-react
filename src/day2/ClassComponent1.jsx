import { Component } from 'react';

// 부모(Day2App)가 <ClassComponent1 title="" price={100}>내용</ClassComponent1>
// 자식 ClassComponent
class ClassComponent1 extends Component {
    render() {
        const { title, price, children, subject } = this.props;

        return (
            <div>
                <h1>class형 컴포넌트1</h1>
                <p>title : {this.props.title}</p>
                <p>price : {this.props.price}</p>
                <p>children : {this.props.children}</p>
                <p>title2 : {title}</p>
                <p>price2 : {price}</p>
                <p>children2 : {children}</p>
                <ul>
                    {subject && subject.map((item, index) => <li key={item}>{item}</li>)}
                </ul>
            </div>
        );
    }
}

export default ClassComponent1;