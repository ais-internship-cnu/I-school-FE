import { BottomNavigation, BottomNavigationAction, styled } from "@mui/material";
import React from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';

const CustomBottomNavigation = styled(BottomNavigation)({
    position: 'fixed',
    bottom: 0,
    width: '353px',
    borderTop: '1px solid #cccccc',
    '& .Mui-selected': {
        color: '#f06292',
    },
    '& .MuiBottomNavigationAction-root': {
        color: 'gray',
    },
    '& .MuiBottomNavigationAction-root .MuiSvgIcon-root': {
        color: 'gray',
    },
    '& .Mui-selected .MuiSvgIcon-root': {
        color: '#f06292',
    }
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <CustomBottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="강의평" icon={<StarBorderIcon />} />
      <BottomNavigationAction label="시험 정보" icon={<PlagiarismOutlinedIcon />} />
    </CustomBottomNavigation>
  );
}
