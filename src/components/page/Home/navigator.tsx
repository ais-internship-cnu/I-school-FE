import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';

// 스타일 구성
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
  '&.selected': {
    color: '#ff69b4',
    '& .MuiBottomNavigationAction-label': {
      fontWeight: 'bold',
    },
    '& .MuiSvgIcon-root': {
      color: '#ff69b4',
    },
  },
  '&.notSelected': {
    color: '#cccccc',
    '& .MuiBottomNavigationAction-label': {
      fontWeight: 'normal',
    },
    '& .MuiSvgIcon-root': {
      color: '#cccccc',
    },
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: '10px',
    paddingTop: '2px',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
  },
}));

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/home-page') {
      setValue(0);
    } else if (pathname === '/timetable-page') {
      setValue(1);
    }
  }, [pathname]);

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      router.push('/home-page');
    } else if (newValue === 1) {
      router.push('/timetable-page');
    }
  };

  return (
    <StyledAppBar position="absolute">
      <Toolbar style={{ padding: 0 }}>
        <StyledBottomNavigation
          value={value}
          onChange={(event, newValue) => handleNavigation(newValue)}
          showLabels
        >
          <StyledBottomNavigationAction
            label="홈"
            icon={<HomeIcon />}
            className={value === 0 ? 'selected' : 'notSelected'}
          />
          <StyledBottomNavigationAction
            label="시간표"
            icon={<ScheduleIcon />}
            className={value === 1 ? 'selected' : 'notSelected'}
          />
          <StyledBottomNavigationAction
            label="마이페이지"
            icon={<AccountCircleIcon />}
            className={value === 2 ? 'selected' : 'notSelected'}
          />
        </StyledBottomNavigation>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
