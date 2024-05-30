'use client';

// default
import { ReactNode } from 'react';
// external
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
// internal
import { store } from '@/store/store';
import { theme } from '../theme/theme';

type ProviderProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
