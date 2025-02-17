// 업무 로직을 Component에서 분리하기(reducer를 이용해서 로직 작성)
// 첫 번째 arg : 상태 관리를 하고자 하는 data
// 두 번째 arg : 어떤 동작을 하고자 하는지, 동작 시 필요한 data; {} 형태로 옴
export function studentReducer(student, action) {
    switch (action.type) {
        case "CHANGED":
            return {...student, [action.field]: action.value};
        default:
            return student;
    }
}