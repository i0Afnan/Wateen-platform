'use client';

// external
import { Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack
      sx={{
        flexDirection: { xs: 'column-reverse', md: 'row' },
      }}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      color="#ffffff"
    >
      <Typography>Wateen ® 2024 All Right Reserved.</Typography>
      <Stack direction="row" spacing="2rem">
        <Typography>Privacy Policy</Typography>
        <Typography>Terms of Service</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
