import { Button, Typography, Grid, TextField } from "@mui/material"
import 'styles/review-register.css'

const courseReview = () => {
    return(
        <TextField
          multiline
          rows={8}
          variant="filled"
          fullWidth
          placeholder="이 강의에 대한 총평을 작성해주세요."
          className="rating-textarea"
        />
    )

}

export default courseReview