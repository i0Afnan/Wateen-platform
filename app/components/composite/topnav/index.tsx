import { Box, Stack } from '@mui/material';
import { IconMenu2 } from '@tabler/icons-react';

const TopNav = () => {
  return (
    <Stack justifyContent="center" px={2} py={3} width="100" bgcolor="#ffffff">
      <IconMenu2 size={24} color="#292d32" cursor="pointer" />
    </Stack>
  );
};

export default TopNav;
