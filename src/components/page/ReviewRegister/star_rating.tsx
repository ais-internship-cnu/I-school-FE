import React, { useState } from 'react';
import { Rating, Typography, Box } from "@mui/material";
import 'styles/review-register.css';

const StarRating = () => {
    const [value, setValue] = useState<number | null>(0);
    // value는 사용자가 선택한 별점 값을 저장.
    // setValue는 value상태를 업데이트

    return (
        <Box className="star-rating">
            <Rating
                name="course-rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                size="large"
                precision={1}
            />
        </Box>
    );
};

export default StarRating;  