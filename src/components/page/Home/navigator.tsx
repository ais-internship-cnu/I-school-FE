import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // next/navigation에서 useRouter와 usePathname을 가져옵니다.
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';

// 스타일 구성
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

const StyledBottomNavigationAction = styled(BottomNavigationAction, {
  shouldForwardProp: (prop) => prop !== 'selected',
})(({ selected }) => ({
  minWidth: '0px', // 아이콘과 텍스트 사이의 간격을 줄임
  maxWidth: '100px', // 각 아이템의 최대 너비를 설정
  color: selected ? '#ff69b4' : '#cccccc', // 선택된 아이템은 진한 분홍색, 그렇지 않은 아이템은 연한 분홍색
  '& .MuiBottomNavigationAction-label': {
    fontSize: '10px', // 텍스트 크기 조정
    paddingTop: '2px', // 텍스트와 아이콘 사이의 간격 조정
    fontWeight: selected ? 'bold' : 'normal', // 선택된 아이템은 굵은 글씨, 그렇지 않은 아이템은 일반 글씨
  },
  '& .MuiSvgIcon-root': {
    fontSize: '24px', // 아이콘 크기 조정
    color: selected ? '#ff69b4' : '#cccccc', // 선택된 아이콘은 진한 분홍색, 그렇지 않은 아이콘은 연한 분홍색
  },
}));

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // useRouter 호출
  const pathname = usePathname(); // usePathname 호출

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
            selected={value === 0}
          />
          <StyledBottomNavigationAction
            label="시간표"
            icon={<ScheduleIcon />}
            selected={value === 1}
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
