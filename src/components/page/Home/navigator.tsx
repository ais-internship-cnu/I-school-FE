import React from 'react';
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  top: 'auto',
  bottom: 0,
  height: '60px', // 네비게이션 바의 높이 조정
  maxWidth: '353px', // 네비게이션 바의 최대 너비를 설정하여 화면에 맞춤
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  backgroundColor: '#ffffff', // 네비게이션 바 배경색을 흰색으로 설정
});

const StyledBottomNavigation = styled(BottomNavigation)({
  width: '100%',
  height: '60px', // 네비게이션 바의 높이와 맞춤
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  minWidth: '0px', // 아이콘과 텍스트 사이의 간격을 줄임
  maxWidth: '100px', // 각 아이템의 최대 너비를 설정
  '& .MuiBottomNavigationAction-label': {
    fontSize: '10px', // 텍스트 크기 조정
    paddingTop: '2px', // 텍스트와 아이콘 사이의 간격 조정
  },
  '& .MuiSvgIcon-root': {
    fontSize: '24px', // 아이콘 크기 조정
  },
});

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
          <StyledBottomNavigationAction label="홈" icon={<HomeIcon />} />
          <StyledBottomNavigationAction label="시간표" icon={<ScheduleIcon />} />
          <StyledBottomNavigationAction label="마이페이지" icon={<AccountCircleIcon />} />
        </StyledBottomNavigation>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
