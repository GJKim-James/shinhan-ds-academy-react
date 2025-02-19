import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap css
import Day4App from 'day4/Day4App';
import KeyList from 'day4/reactmemo/KeyList';
import SmartHome from 'day4/reactmemo/SmartHome';
import CounterReducerTest from 'day4/reducer/CounterReducerTest';
import MemberReducerTest from 'day4/reducer/MemberReducerTest';
import RefTest1 from 'day4/RefTest1';
import RefTest2 from 'day4/RefTest2';
import RefTest3 from 'day4/RefTest3';
import UseMemoTest from 'day4/UseMemoTest';
import StudentManager from 'day5/review/StudentManager';
import StudentManager2 from 'day5/review/StudentManager2';
import EmpHome from 'emp/EmpHome';
import Home from 'Home';
import 'index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';
import WebBoardHome from 'webboard/WebBoardHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> : 리액트앱 내부의 잠재적 문제를 검사하는 도구
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/day5/state' element={<StudentManager></StudentManager>}></Route>
        <Route path='/day5/reducer' element={<StudentManager2></StudentManager2>}></Route>
        <Route path='/day4/diary' element={<Day4App></Day4App>}></Route>
        <Route path='/day4/member' element={<MemberReducerTest></MemberReducerTest>}></Route>
        <Route path='/day4/key' element={<KeyList></KeyList>}></Route>
        <Route path='/day4/smarthome' element={<SmartHome></SmartHome>}></Route>
        <Route path='/day4/counter' element={<CounterReducerTest></CounterReducerTest>}></Route>
        <Route path='/day4/usememo' element={<UseMemoTest></UseMemoTest>}></Route>
        <Route path='/day4/ref1' element={<RefTest1></RefTest1>}></Route>
        <Route path='/day4/ref2' element={<RefTest2></RefTest2>}></Route>
        <Route path='/day4/ref3' element={<RefTest3></RefTest3>}></Route>
        <Route path='/webboard/*' element={<WebBoardHome></WebBoardHome>}></Route>
        <Route path='/emp/*' element={<EmpHome></EmpHome>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
