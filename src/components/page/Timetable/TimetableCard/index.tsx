import { Card, CardContent, Typography } from "@mui/material";
import { Course } from "types/timetable";

interface TimetableProps {
    course: Course
}

const TimetableCard = ({course}:TimetableProps) => {

    const createRatingStar = (rating:number) => {

        let star:string = ''

        for(let i=0; i<rating; i++){
            star = star + '★'
        }

        return star
    }

    const maskString = (userId:string) => {
        if(userId.length <= 2) {
            return userId; // 문자열의 길이가 2 이하인 경우, 문자열 전체를 반환한다.
        }

        const visiblePart = userId.slice(0,2);
        const maskedPart = "***"

        return visiblePart + maskedPart
    }

    

    return (
        <Card>
            <CardContent>
                <Typography>
                    강의 이름: {course.courseName}
                </Typography>
                <Typography>
                    강의실 이름: {course.courseRoom}
                </Typography>
                <Typography>
                    강의 요일: {course.courseDay}
                </Typography>
                <Typography>
                    강의 시작 시간: {course.courseStartTime}
                </Typography>
                <Typography>
                    강의 끝나는 시간: {course.courseEndTime}
                </Typography>
            </CardContent>
        </Card>
    )

}

export default TimetableCard