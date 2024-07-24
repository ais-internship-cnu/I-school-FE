import { Typography, Button, Grid } from "@mui/material";
import 'styles/review-register.css';

const Header = () => {
    return (
        <Grid container className="header-container" alignItems="center">
            <Grid item xs={4}></Grid>
            <Grid item xs={4} container justifyContent="center">
                <Typography variant="h6" className="rating-title">
                    강의평
                </Typography>
            </Grid>
            <Grid item xs={4} container justifyContent="flex-end">
                <Button variant="contained" className="rating-button">
                    평가하기
                </Button>
            </Grid>
        </Grid>
    );
}

export default Header;
