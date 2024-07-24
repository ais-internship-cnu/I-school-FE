import React, { useState } from 'react';
import { Rating, Typography, Box } from "@mui/material";
import 'styles/review-register.css';

const StarRating = () => {
    const [value, setValue] = useState<number | null>(0);

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