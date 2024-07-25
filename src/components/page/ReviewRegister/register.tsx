import { Button, TextField , Box, Rating} from "@mui/material";
import useReview from "hooks/useReview";
import { useState } from "react";
import "styles/review-register.css";

const register = () => {
  const [food, setFood] = useState(''); // 텍스트 필드의 내용을 저장할 상태 변수
//   const [img, setContent] = useState("test8");
  const [star, setStar] = useState<number | null>(0);

  const { onCreateReview } = useReview();

  const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    console.log("onsubmit")
    event.preventDefault();
    const img = star !== null ? star.toString() : '0'; // 평점을 문자열로 변환
    onCreateReview({food, img});
    console.log(`Food: ${food}, Img: ${img}`);
  };

//   const onPlus = () => {
//     console.log('onplus')
//     setReview(food);
//   };

  
  return (
    <form onSubmit={onSubmit}>
        <Box className="star-rating">
            <Rating
                name="course-rating"
                value={star}
                onChange={(event, newValue) => {
                    setStar(newValue);
                }}
                size="large"
                precision={1}
            />
        </Box>
        <TextField
          multiline
          rows={8}
          variant="filled"
          fullWidth
          placeholder="이 강의에 대한 총평을 작성해주세요."
          value={food}
          className="rating-textarea"
          onChange={(event) => setFood(event.target.value)} // 텍스트 필드 내용 업데이트
        />
        <Button className="submit-button" type="submit">제출</Button>
    </form>
  );
};

export default register;
