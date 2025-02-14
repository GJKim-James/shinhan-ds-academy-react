// useReducer()를 이용한 여러 값 상태 관리 : action에 따라 state 값 변경
// state : 관리하고자 하는 data
function reducer1(state, action) {
    switch (action.type) {
        case "PLUS": return state + 1;
        case "MINUS": return state - 1;
        default: return state;
    }
}

export default reducer1;