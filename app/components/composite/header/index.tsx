import { Box, Stack, Typography } from '@mui/material';
import { IconPointFilled } from '@tabler/icons-react';

const Header = () => {
  return (
    <Stack bgcolor="#52006a" gap={1} color="#ffffff" p={3} borderRadius={4}>
      <Box>
        <Typography fontSize={20}>Show All Users</Typography>
      </Box>
      <Stack flexDirection="row" alignItems="center" gap={1}>
        <Typography fontSize={12}>Dashboard</Typography>
        <IconPointFilled size={10} />
        <Typography fontSize={12}>Users</Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
