import { Typography, Grid, IconButton, Box, Drawer } from "@mui/material";
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import 'styles/timetable.css';
import { useState } from "react";
import CourseDrawer from "./BottomSheet"; // CourseDrawer는 BottomSheet에서 변경된 컴포넌트

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            <Grid container alignItems="center" justifyContent="space-between" className="header">
                <Typography className="timetable-title-box">
                    <Typography>
                        2023학년 2학기
                    </Typography>
                    <Typography variant="h5" className="timetable-title">
                        시간표
                    </Typography>
                </Typography>
                <div>
                    <IconButton onClick={toggleDrawer}>
                        <AddIcon />
                        <CourseDrawer open={isDrawerOpen} onClose={toggleDrawer} />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                    <IconButton>
                        <ScheduleIcon />
                    </IconButton>
                </div>
            </Grid>

            
        </div>
    );
};

export default Header;
