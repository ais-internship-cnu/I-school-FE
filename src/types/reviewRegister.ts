// reviewRegister 입력 데이터 타입 생성
// 나중에 DB맞춰서 string을 num로 업데이트 변수명 설정.
export type ReviewRegister = {
    // userId: number;
    // courseId: number;
    food: string
    img: string
}

export type ReviewRegisterTest = {
    // userId: number;
    // courseId: number
    food: string
    rating: number
}

export type postData = {
    // userId: number;
    food: string
    rating: number
    courseId: number
}