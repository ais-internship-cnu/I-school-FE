import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField , Box, Rating} from "@mui/material";
import useReview from "hooks/useReview";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "styles/review-register.css";
import { ReviewRegisterTest } from "types/reviewRegister";
import * as yup from 'yup'

const register = () => {
  const [food, setFood] = useState('');
  // 텍스트 필드의 내용을 저장할 상태 변수
  const { onCreateReview } = useReview();

  const schema = yup.object().shape({

    rating: yup
    .number()
    .typeError("숫자로 적어주세요")
    .min(0, "0이상 값을 넣어주세요")
    .max(5, "5이하 값을 넣어주세요")
    .required("평점을 입력해주세요"),
    food: yup
    .string()
    .typeError("강의평을 입력해주세요")
    .max(256, "256자 이내로 적어주세요")
    .required("강의평을 입력해주세요"),

  })


  const {
    setValue,
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm<ReviewRegisterTest>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
        rating: 0,
        food: "",
    }
  })

  const onSubmit = async (data:ReviewRegisterTest) => {
    // 등록했을 때 알림창 추가 예외처리
    try {
      await onCreateReview({food:data.food, rating: data.rating})
      alert('등록되었습니다.')
    } catch (error) {
      alert('등록에 실패했습니다.')
      console.error(error)
    }
    // console.log(`Food: ${food}, Img: ${img}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="star-rating">
          <Rating
            name="course-rating"
            value={undefined}
            onChange={(event, newValue) => {
              setValue("rating", newValue || 0);
            }}
            size="large"
            precision={1}
          />
          {errors.rating && <p>{errors.rating.message}</p>}
        </Box>
        <TextField
          multiline
          rows={8}
          variant="filled"
          fullWidth
          placeholder="이 강의에 대한 총평을 작성해주세요."
          {...register('food')}
          className="rating-textarea"
          helperText={errors.food?.message}
        />
        <Button className="submit-button" type="submit">평가하기</Button>
    </form>
  );
};


export default register