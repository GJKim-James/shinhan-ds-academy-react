import commonData, { calculateGrade, StudentContext } from 'day5/review/commonData';
import StudentInput from 'day5/review/StudentInput';
import { studentListReducer } from 'day5/review/StudentListReducer';
import StudentOutput from 'day5/review/StudentOutput';
import { studentReducer } from 'day5/review/StudentReducer';
import { useCallback, useEffect, useReducer, useRef } from 'react';

function StudentManager2(props) {
    // 한 명의 학생 data 입력(useReducer를 이용한 상태 관리), 상태 관리 : 변수의 값이 바뀌면 React가 UI에 반영
    // state는 상태 관리 변수(student로 정함, 보통 state로 사용함)
    // dispatcher는 Reducer의 기능 호출 시 사용하는 함수
    // studentReducer는 비즈니스 로직
    // {} : 첫 번째 arg의 초기값
    const [student, dispatcher] = useReducer(studentReducer, {});

    // 여러 명의 학생 data 출력(useReducer를 이용한 상태 관리리)
    const [studentList, dispatcherStudentList] = useReducer(studentListReducer, commonData);

    const changeHandler = useCallback((e) => {
        dispatcher({ type: "CHANGED", field: e.target.name, value: e.target.value });
    }, []);

    useEffect(() => {
        console.log("changeHandler 변경");
    }, [changeHandler]);

    const studentId = useRef(3); // reload 시 초기화하지 않고 Heap에 저장된 값이 유지됨

    const nameRef = useRef();
    const majorRef = useRef();
    const scoreRef = useRef();

    // 학생 추가
    const addHandler = () => {
        // 모든 field가 입력된 경우만 추가 가능
        if (!student.name) {
            alert("이름은 필수입니다.");
            nameRef.current.focus();
            return;
        }

        if (!student.major) {
            alert("전공은 필수입니다.");
            majorRef.current.focus();
            return;
        }

        if (!student.score) {
            alert("점수는 필수입니다.");
            scoreRef.current.focus();
            return;
        }
        
        // setStudent({...student, id: 3}); // 비동기이므로 {} 완료 후 []에 추가되는 것 아님(주의!!)
        const newStudent = {...student, id: studentId.current, grade: calculateGrade(student.score)};
        dispatcherStudentList({ type: "ADD", newStudent }); // useReducer의 dispatcher를 이용한 학생 추가
        studentId.current++;
    };

    // studentList 중 번호가 id인 student 정보 수정(studentList의 특정 field만 변경)
    const updateHandler = (id, fieldName, fieldValue) => {
        // stu.id === id이면 수정하고 그렇지 않으면 stu 그대로
        // 점수 수정 시 학점 다시 계산; fieldValue 값이 string 타입으로 옴
        fieldValue = ((fieldName === "score" && fieldValue) ? parseInt(fieldValue) : fieldValue);
        
        dispatcherStudentList({ type: "UPDATE", id, fieldName, fieldValue }); // useReducer의 dispatcher를 이용한 학생 수정
    };

    // 학생 삭제
    const deleteHandler = (id) => {
        dispatcherStudentList({ type: "DELETE", id }); // useReducer의 dispatcher를 이용한 학생 삭제
    };

    // const inputObj = { nameRef, majorRef, scoreRef, changeHandler, addHandler };
    // const outputObj = { studentList, updateHandler, deleteHandler };

    const contextData = { nameRef, majorRef, scoreRef, changeHandler, addHandler, studentList, updateHandler, deleteHandler };

    return (
        <div className='container'>
            <h1>useReducer 예제</h1>
            <StudentContext.Provider value={contextData}>
                <StudentInput></StudentInput>
                <StudentOutput></StudentOutput>
            </StudentContext.Provider>
        </div>
    );
}

export default StudentManager2;