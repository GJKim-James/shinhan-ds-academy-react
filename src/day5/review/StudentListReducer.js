import { calculateGrade } from "day5/review/commonData";

export function studentListReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.newStudent];

        case "UPDATE": 
            const newStudentList = state.map((stu) => (
                stu.id === action.id ?
                {...stu, [action.fieldName]: action.fieldValue, grade: action.fieldName === "score" ? calculateGrade(action.fieldValue) : stu.grade} : stu
            ));
            return newStudentList;
        
        case "DELETE":
            return state.filter((stu) => stu.id !== action.id);

        default:
            return state;
    }
}