'use client';

// internal
import Header from '@/app/components/composite/header';
import { Stack } from '@mui/material';
import SetBasicInfo from '@/app/components/composite/forms/setBasicInfo';

const Users = () => {
  return (
    <Stack gap={2}>
      <Header />
      <SetBasicInfo />
    </Stack>
  );
};

export default Users;
