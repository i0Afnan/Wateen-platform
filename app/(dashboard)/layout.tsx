'use client';

import { Box, Stack } from '@mui/material';
import Sidenav from '../components/composite/sidenav';
import TopNav from '../components/composite/topnav';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack flexDirection="row" bgcolor="#f4f4f4">
      <Sidenav />
      <Stack width="100%" height="100vh" sx={{ overflowY: 'auto' }}>
        <TopNav />
        <Box style={{ padding: 20 }}>{children}</Box>
      </Stack>
    </Stack>
  );
};

export default Layout;
