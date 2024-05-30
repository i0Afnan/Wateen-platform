'use client';

// external
import { Box, Stack, Typography } from '@mui/material';
// internal
import Logo from '@/app/assets/images/icons/logo';
import SA from '../../assets/images/icons/sa';

export default function Header() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Logo />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={1}
        color="#ffffff"
        sx={{ cursor: 'pointer' }}
      >
        <SA />
        <Typography>Arabic - العربية</Typography>
      </Box>
    </Stack>
  );
}
