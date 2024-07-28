import { Typography, Grid, IconButton, Box } from "@mui/material"
import ScheduleIcon from '@mui/icons-material/Schedule'
import SettingsIcon from '@mui/icons-material/Settings'
import AddIcon from '@mui/icons-material/Add'
import 'styles/timetable.css'

const Header = () => {
    return (
        <div>
            <Grid container alignItems="center" justifyContent="space-between" className="timetable-header">
                <Box className="timetable-title-box">
                    <Typography>2023학년 2학기</Typography>
                    <Typography variant="h5" className="timetable-title">시간표</Typography>
                </Box>
                <div>
                    <IconButton>
                        <AddIcon />
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
    )
}

export default Header
