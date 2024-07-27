import React from 'react';
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  top: 'auto',
  bottom: 0,
  height: '60px',
  maxWidth: '353px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  backgroundColor: '#ffffff',
});

const StyledBottomNavigation = styled(BottomNavigation)({
  width: '100%',
  height: '60px',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  minWidth: '0px',
  maxWidth: '100px',
  '&.Mui-selected': {
    color: '#ff69b4',
    '& .MuiBottomNavigationAction-label': {
      fontWeight: 'bold',
    },
    '& .MuiSvgIcon-root': {
      color: '#ff69b4',
    },
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: '10px',
    paddingTop: '2px',
    fontWeight: 'normal',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
    color: '#cccccc',
  },
  color: '#cccccc',
}));

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <StyledAppBar position="absolute">
      <Toolbar style={{ padding: 0 }}>
        <StyledBottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <StyledBottomNavigationAction
            label="홈"
            icon={<HomeIcon />}
          />
          <StyledBottomNavigationAction
            label="시간표"
            icon={<ScheduleIcon />}
          />
          <StyledBottomNavigationAction
            label="마이페이지"
            icon={<AccountCircleIcon />}
          />
        </StyledBottomNavigation>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
