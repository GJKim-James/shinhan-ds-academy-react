import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to={"/day5/state"} className='btn btn-primary mb-1'>useState 상태 관리</Link></li>
                <li><Link to={"/day5/reducer"} className='btn btn-primary mb-1'>useReducer 상태 관리</Link></li>
                <li><Link to={"/day4/diary"} className='btn btn-primary mb-1'>다이어리</Link></li>
                <li><Link to={"/day4/member"} className='btn btn-primary mb-1'>Member</Link></li>
                <li><Link to={"/day4/key"} className='btn btn-primary mb-1'>Key(React.Memo)</Link></li>
                <li><Link to={"/day4/smarthome"} className='btn btn-primary mb-1'>SmartHome(React.Memo)</Link></li>
                <li><Link to={"/day4/counter"} className='btn btn-primary mb-1'>counter(reducer)</Link></li>
                <li><Link to={"/day4/usememo"} className='btn btn-primary mb-1'>useMemo</Link></li>
                <li><Link to={"/day4/ref1"} className='btn btn-primary mb-1'>RefTest1</Link></li>
                <li><Link to={"/day4/ref2"} className='btn btn-primary mb-1'>RefTest2</Link></li>
                <li><Link to={"/day4/ref2"} className='btn btn-primary mb-1'>RefTest3</Link></li>
                <li><Link to={"/webboard"} className='btn btn-primary mb-1'>WebBoard로 이동</Link></li>
                <li><Link to={"/emp"} className='btn btn-primary mb-1'>Emp로 이동</Link></li>
                <li><Link to={"/login"} className='btn btn-primary mb-1'>로그인</Link></li>
                <li><Link to={"/signup"} className='btn btn-primary mb-1'>회원가입</Link></li>
            </ul>
        </div>
    );
}

export default Home;