import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type CustomSnackbarProps = {
  label: null | string;
  severity: 'error' | 'info' | 'success' | 'warning';
};

export default function CustomSnackbar({ label, severity }: CustomSnackbarProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: '100%' }}>
          {label}
        </Alert>
      </Snackbar>
    </div>
  );
}
