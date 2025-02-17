import commonData, { StudentContext } from 'day5/review/commonData';
import StudentInput from 'day5/review/StudentInput';
import StudentOutput from 'day5/review/StudentOutput';
import { useCallback, useRef, useState } from 'react';

// 학점 계산 함수 (연산이 오래 걸린다고 가정)
const calculateGrade = (score) => {
    console.log("학점 계산 중...");

    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";

    return "F";
};

function StudentManager(props) {
    // 한 명의 학생 data 입력(useState를 이용한 상태 관리)
    const [student, setStudent] = useState({}); // {id: 0, name: "김철수", major: "컴퓨터공학", score: 100, grade: "A"}

    // 여러 명의 학생 data 출력
    const [studentList, setStudentList] = useState(commonData);

    const changeHandler = useCallback((e) => { // student가 변경될 때만 changeHandler 수행되게끔 useCallback 선언
        // console.log(e.target.name, e.target.value);
        const fieldName = e.target.name;
        setStudent({ ...student, [fieldName]: e.target.value });
    }, [student]);

    // useEffect(() => {
    //     console.log("changeHandler 변경됨");
    // }, [changeHandler]);

    // // lifecycle 관리, [의존 배열]의 값이 변경되면 메소드 수행
    // useEffect(() => {
    //     console.log("변경된 student : ", student);
    // }, [student]);

    const studentId = useRef(3); // reload 시 초기화하지 않고 Heap에 저장된 값이 유지됨
    // useEffect(() => {
    //     console.log("studentId : " + studentId.current);
    // }); // [] 없으면 load 시 마다 수행됨

    const nameRef = useRef();
    const majorRef = useRef();
    const scoreRef = useRef();

    // // 학점 계산하기
    // const gradeValue = () => {calculateGrade(student.score)};
    // useEffect(() => {console.log("학점 계산함")}, [student.score]);

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
        setStudentList([...studentList, newStudent]); // 기존 studentList + 새로운 student
        studentId.current++;
    };

    // studentList 중 번호가 id인 student 정보 수정(studentList의 특정 field만 변경)
    const updateHandler = (id, fieldName, fieldValue) => {
        // stu.id === id이면 수정하고 그렇지 않으면 stu 그대로
        // 점수 수정 시 학점 다시 계산; fieldValue 값이 string 타입으로 옴
        fieldValue = ((fieldName === "score" && fieldValue) ? parseInt(fieldValue) : fieldValue);
        const newStudentList = studentList.map((stu) => (
            stu.id === id ? {...stu, [fieldName]: fieldValue, grade: fieldName === "score" ? calculateGrade(fieldValue) : stu.grade} : stu
        )); // () => return (); return 생략됨
        setStudentList(newStudentList);
    };

    // useEffect(() => {
    //     console.log(studentList);
    // }, [studentList]);

    // 학생 삭제
    const deleteHandler = (id) => {
        setStudentList(studentList.filter((stu) => (stu.id !== id))); // stu.id !== id인 조건을 만족하는 student만 studentList에 저장(필터링)
    };

    const inputObj = { nameRef, majorRef, scoreRef, changeHandler, addHandler };
    const outputObj = { studentList, updateHandler, deleteHandler };
    const inoutObj = { ...inputObj, ...outputObj };

    return (
        <div className='container'>
            <h1>StudentManager(useState로 상태 관리하기)</h1>
            <StudentContext.Provider value={inoutObj}>
                <StudentInput></StudentInput>
                <StudentOutput></StudentOutput>
            </StudentContext.Provider>
        </div>
    );
}

export default StudentManager;