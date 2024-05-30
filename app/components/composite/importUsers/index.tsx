'use client';

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import { IconX, IconTrash } from '@tabler/icons-react';
import CustomButton from '../../ui/customButton';
import Upload from './icons/upload';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { toggle } from '@/store/slices/toggleSlice';

const ImportUsers = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggle());
  };

  return (
    <Box
      sx={{
        background: '#00000040',
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            maxWidth: 400,
            padding: 3,
            borderRadius: 6,
          }}
        >
          <CardContent
            sx={{
              bgcolor: '#f6f6f6',
              display: 'flex',
              justifyContent: 'space-between',
              borderRadius: 4,
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontSize={18}>
              Import Users
            </Typography>
            <IconX onClick={handleClick} cursor="pointer" />
          </CardContent>
          <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
            <Typography>Download Template</Typography>
            <CustomButton
              color="#ffffff"
              fullWidth={false}
              type="button"
              variant="contained"
              width={150}
              bgColor="#ff8c29"
              label="Download"
            />
          </Stack>
          <CardActionArea
            sx={{
              border: '2px dashed #52006a',
              borderRadius: 2,
              padding: 2,
              backgroundColor: '#eee6f1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Upload />
            <Typography fontWeight="bold">Upload XSLX</Typography>
            <Typography fontSize={12}>Drag & Drop files here</Typography>
          </CardActionArea>
          <CardActionArea
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #eeeeee',
              borderRadius: 2,
              padding: 2,
            }}
          >
            <Typography fontSize={14}>Mask group-1.XSLX</Typography>
            <IconTrash color="red" />
          </CardActionArea>
          <Typography fontSize={12}>
            Please adhere to the illustrative example in the Excel form.. After adding your data,
            remove the example and keep the data to be imported
          </Typography>
          <Stack flexDirection="row" justifyContent="space-between">
            <CustomButton
              color="primary"
              fullWidth={false}
              type="button"
              variant="outlined"
              width={150}
              bgColor=""
              label="Close"
            />
            <CustomButton
              color="#ffffff"
              fullWidth={false}
              type="button"
              variant="contained"
              width={150}
              bgColor="#52006a"
              label="Import"
            />
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default ImportUsers;
