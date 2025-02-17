import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to={"/day5/state"}>useState 상태 관리</Link>
                </li>
                <li>
                    <Link to={"/day5/reducer"}>useReducer 상태 관리</Link>
                </li>
                <li>
                    <Link to={"/day4/diary"}>다이어리</Link>
                </li>
                <li>
                    <Link to={"/day4/member"}>Member</Link>
                </li>
                <li>
                    <Link to={"/day4/key"}>Key(React.Memo)</Link>
                </li>
                <li>
                    <Link to={"/day4/smarthome"}>SmartHome(React.Memo)</Link>
                </li>
                <li>
                    <Link to={"/day4/counter"}>counter(reducer)</Link>
                </li>
                <li>
                    <Link to={"/day4/usememo"}>useMemo</Link>
                </li>
                <li>
                    <Link to={"/day4/ref1"}>RefTest1</Link>
                </li>
                <li>
                    <Link to={"/day4/ref2"}>RefTest2</Link>
                </li>
                <li>
                    <Link to={"/day4/ref2"}>RefTest3</Link>
                </li>
                <li>
                    <Link to={"/webboard"}>WebBoard로 이동</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;