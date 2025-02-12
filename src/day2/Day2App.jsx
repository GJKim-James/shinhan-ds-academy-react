import { myscore } from 'day2/Header'; // 절대 경로로 수정(./Header -> day2/Header); jsconfig.json 파일에서 설정
import FunctionComponent1 from 'day2/FunctionComponent1';
import FunctionComponent2 from 'day2/FunctionComponent2';
import ClassComponent1 from 'day2/ClassComponent1';

function Day2App(props) {
    var a = myscore;
    // 환경 변수 설정 시 재시작 필요
    var channel = process.env.REACT_APP_CHANNEL_ID; // 환경 변수(.env)
    var path = process.env.REACT_APP_IMAGE_PATH;
    console.log("channel : " + channel);
    console.log("path : " + path);

    const arr = ["자바", "리액트", "스프링"];

    return (
        <div>
            {/* <Header></Header>
            <Header2></Header2>
            <hr />
            <Body></Body>
            <hr />
            <Footer></Footer>
            <hr />
            <h1>myscore : {a}</h1>
            <hr />
            <h1>환경 변수(.env에 선언, 선언 시 서버 재시작 필요)</h1>
            <p>channel : {channel}</p>
            <p>path : {path}</p> */}

            <FunctionComponent1 title="농협" price={100} subject={arr}>함수형 Component1</FunctionComponent1>
            <FunctionComponent2 title="신한" price={200}>함수형 Component2</FunctionComponent2>
            <FunctionComponent2>속성 값이 없으면 default 값 부여하기</FunctionComponent2>
            <ClassComponent1 title="우리" price={300}>class형 Component1</ClassComponent1>
            <ClassComponent1>속성 값이 없으면 default 값 부여하기</ClassComponent1>
        </div>
    );
}

// 함수형은 JS의 default 값 부여하는 방법으로 사용해야함(React 18버전부터)
// FunctionComponent2.defaultProps = {title: "국민", price: 500}; // 17버전까지 가능
// 클래스형 컴포넌트의 속성 값이 없을 때 default 값 부여하기
ClassComponent1.defaultProps = {title: "기업", price: 400, subject: ["Q1", "Q2"]};
export default Day2App;