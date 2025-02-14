import React, { useRef, useState } from 'react';
import FormComponent from 'day4/reducer/FormComponent';
import TableComponent from 'day4/reducer/TableComponent';

const initMember = {
    member: { mid: 0, name: "", phone: "", active: false },
    memberList: [
      { mid: 1, name: "A", phone: "1234", active: false },
      { mid: 2, name: "B", phone: "5678", active: false },
    ],
};

function MemberReducerTest(props) {
    const [member, setMember] = useState(initMember.member);
    const [memberList, setMemberList] = useState(initMember.memberList);
    const nextId = useRef(3);

    const changeHandler = (e) => {
        let activeValue = null;
        if (e.target.name === "active") {
            activeValue = e.target.checked;
        } else {
            activeValue = e.target.value;
        }
        
        setMember({...member, [e.target.name]: activeValue});
    };

    const addHandle = () => {
        const newMember = {...member, mid: nextId.current};
        setMemberList([...memberList, newMember]);
        nextId.current++;
    };

    const removeHandler = (targetMid) => {
        console.log(targetMid); // targetMid는 string 타입으로 넘어옴(!== 말고 !=로 비교해야함)

        // filter() : 새로운 배열을 생성, mid 값이 targetMid와 일치하지 않는 멤버들만 추출
        // 삭제할 멤버를 제외한 나머지 멤버들을 필터링하여 새로운 배열을 만듦
        setMemberList(memberList.filter((item) => item.mid != targetMid));
    };

    // useEffect(() => {
    //     console.log(memberList);
    // }, [memberList]);

    const updateHandler = (targetMid) => {
        setMemberList(memberList.map((item) => item.mid == targetMid ? {...item, active: !item.active} : item));
    };

    const obj = { removeHandler, updateHandler, memberList };

    return (
        <div>
            <FormComponent changeHandler={changeHandler} addHandle={addHandle}></FormComponent>
            <TableComponent {...obj}></TableComponent>
        </div>
    );
}

export default MemberReducerTest;