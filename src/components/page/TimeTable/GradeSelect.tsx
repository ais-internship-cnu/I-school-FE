import React from 'react';
import { Box, IconButton, Modal as MuiModal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import 'styles/select-modal.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const GradeModal: React.FC<ModalProps> = ({ show, onClose }) => {
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
          <h3>학년</h3>
          <ul id="modal-description">
            <li>1학년</li>
            <li>2학년</li>
            <li>3학년</li>
            <li>4학년</li>
            <li>5학년</li>
            <li>6학년</li>
          </ul>
        </div>
      </Box>
    </MuiModal>
  );
}

export default GradeModal;
