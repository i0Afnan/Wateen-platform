import { Stack } from '@mui/material';

const Wrapper = ({ children }: any) => {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        backgroundImage: 'linear-gradient(180deg, #680884 0%, #52006A 100%)',
        userSelect: 'none',
        height: '100vh',
        overflowY: 'auto',
        paddingTop: 1,
        paddingX: 2,
        minWidth: 250,
      }}
    >
      {children}
    </Stack>
  );
};

export default Wrapper;
