import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap css
import TimerApp from 'day3/useEffectTest/TimerApp';
import Day4App from 'day4/Day4App';
import 'index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> : 리액트앱 내부의 잠재적 문제를 검사하는 도구
  <>
    {/* <Day3App></Day3App> */}

    {/* <TimerApp></TimerApp> */}

    <Day4App></Day4App>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
