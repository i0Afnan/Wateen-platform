'use client';

// external
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#52006a',
    },
    secondary: {
      main: '#ff8c29',
    },
    success: {
      main: '#12deb9',
    },
    background: {
      default: '#eee6f1',
    },
  },
  typography: {
    fontFamily: `var(--font-nunito)`,
  },
});
