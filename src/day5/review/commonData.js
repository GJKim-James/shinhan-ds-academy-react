const initstudentList = [
    {
      id: 1,
      name: "김철수",
      major: "컴퓨터공학",
      score: 85,
      grade: "B",
    },
    {
      id: 2,
      name: "이영희",
      major: "전자공학",
      score: 92,
      grade: "A",
    },
];

// 학점 계산 함수 (연산이 오래 걸린다고 가정)
export const calculateGrade = (score) => {
    console.log("학점 계산 중...");

    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";

    return "F";
};

export default initstudentList;