import React from 'react';
import { Box, IconButton, Modal as MuiModal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import 'styles/select-modal.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const MajorModal: React.FC<ModalProps> = ({ show, onClose }) => {
  return (
    <MuiModal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box className="modalBox" onClick={(e) => e.stopPropagation()}>
        <IconButton className="modalClose" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <div className="modalContent">
          <h3>전공 선택</h3>
          <ul id="modal-description">
            <li>간호대학</li>
            <li>소프트웨어공학과</li>
            <li>전자컴퓨터공학과</li>
            <li>인공지능학부</li>
            <li>자율전공학부</li>
            <li>에너지자원공학과</li>
            <li>에너지자원공학과</li>
            <li>에너지자원공학과</li>
            <li>에너지자원공학과</li>
            <li>에너지자원공학과</li>
          </ul>
        </div>
      </Box>
    </MuiModal>
  );
}

export default MajorModal;
