'use client';

import { Box, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import CopyToClipboardIcon from '@/app/assets/images/icons/copyToClipboardIcon';

const CopyToClipboard = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };

  return (
    <Box onClick={handleClick} sx={{ cursor: 'pointer' }}>
      <CopyToClipboardIcon />
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </Box>
  );
};

export default CopyToClipboard;
