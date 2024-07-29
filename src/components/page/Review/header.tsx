import { Typography, Button, Grid, Link } from "@mui/material";
import { useRouter } from 'next/navigation';
import 'styles/review-register.css';

interface HeaderProps {
  courseId: number;
}

const Header = ({ courseId }: HeaderProps) => {
  const router = useRouter();

  const handleReviewClick = () => {
    router.push(`/review-register-page/${courseId}`);
  };

  return (
    <Grid container className="header-container" alignItems="center">
      <Grid item xs={4}></Grid>
      <Grid item xs={4} container justifyContent="center">
        <Typography variant="h6" className="rating-title">
          강의평
        </Typography>
      </Grid>
      <Grid item xs={4} container justifyContent="flex-end">
        <Button variant="contained" className="rating-button" onClick={handleReviewClick}>
          평가하기
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
