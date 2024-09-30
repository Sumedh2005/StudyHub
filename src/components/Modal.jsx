import React from 'react';
import { Modal as MuiModal, Box } from '@mui/material';

function Modal({ open, handleClose, children }) { // children prop will hold the custom content
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    
    boxShadow: 10,
   
    borderRadius: '8px'
  };

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        {children} {/* Render custom content */}
      </Box>
    </MuiModal>
  );
}

export default Modal;
