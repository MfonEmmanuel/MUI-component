import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

/**
 * Inline styles for the modal box.
 */
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

/**
 * MuiModal component displays a modal dialog with a welcome message.
 * 
 * @component
 * @example
 * return (
 *   <MuiModal />
 * )
 */
const MuiModal = React.memo(() => {
  const [open, setOpen] = React.useState(false);

  /**
   * Opens the modal dialog.
   */
  const handleOpen = () => setOpen(true);

  /**
   * Closes the modal dialog.
   */
  const handleClose = () => setOpen(false);

  /**
   * Effect to handle the escape key press to close the modal.
   * Adds an event listener when the modal is open and removes it when the modal is closed.
   */
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (open) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <div>
      <Button 
        onClick={handleOpen} 
        variant="contained" 
        aria-haspopup="dialog" 
        aria-describedby="modal-modal-description"
      >
        Open modal dialog
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        role="dialog"
        aria-modal="true"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button onClick={handleClose} variant="contained">
              CLOSE ME
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
});

export default MuiModal;
