import { Button, TextField , Box, Rating} from "@mui/material";
import useReview from "hooks/useReview";
import { useState } from "react";
import "styles/review-register.css";

const register = () => {
  const [food, setReview] = useState('8');
//   const [img, setContent] = useState("test8");
  let [star, setValue] = useState<number | null>(0);

  const { onCreateReview } = useReview();

  const onSubmit = () => {
    console.log("onsubmit")
    setValue(star);
    let img = toString(star | null);
    onCreateReview({food, img});
    console.log(food + img)
  };

  const onPlus = () => {
    console.log('onplus')
    setReview(food);
  };

  
  return (
    <form onSubmit={onSubmit}>
        <Box className="star-rating">
            <Rating
                name="course-rating"
                value={star}
                onChange={(event, newValue) => {
                    setValue(newValue);
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
          className="rating-textarea"
        />
        <Button className="submit-button" type="submit">제출</Button>
    </form>
  );
};

export default register;
