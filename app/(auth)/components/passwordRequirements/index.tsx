'use client';

import { useState } from 'react';
import { theme } from '@/app/theme/theme';
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

const PasswordRequirements = ({ moreThan8Chars, containsNumber, containsSpecialChar }: any) => {
  const warning = `${theme.palette.secondary.main} !important`;
  const success = `${theme.palette.success.main} !important`;

  return (
    <Stack mt="1rem">
      <Typography fontWeight="700">The password should include:</Typography>
      <List sx={{ ml: '-0.75rem' }}>
        <ListItem disablePadding>
          <ListItemIcon sx={{ mr: '-0.75rem' }}>
            <Checkbox
              sx={{
                color: !containsSpecialChar ? warning : success,
                '&.Mui-checked': {
                  color: !containsSpecialChar ? warning : success,
                },
              }}
              disabled={!containsSpecialChar ? true : false}
              checked={!containsSpecialChar ? false : true}
            />
          </ListItemIcon>
          <ListItemText sx={{ color: !containsSpecialChar ? warning : success }}>
            Special characters
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon sx={{ mr: '-0.75rem' }}>
            <Checkbox
              sx={{
                color: !containsNumber ? warning : success,
                '&.Mui-checked': {
                  color: !containsNumber ? warning : success,
                },
              }}
              disabled={!containsNumber ? true : false}
              checked={!containsNumber ? false : true}
            />
          </ListItemIcon>
          <ListItemText sx={{ color: !containsNumber ? warning : success }}>
            Contains atleast 1 number
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon sx={{ mr: '-0.75rem' }}>
            <Checkbox
              sx={{
                color: !moreThan8Chars ? warning : success,
                '&.Mui-checked': {
                  color: !moreThan8Chars ? warning : success,
                },
              }}
              disabled={!moreThan8Chars ? true : false}
              checked={!moreThan8Chars ? false : true}
            />
          </ListItemIcon>
          <ListItemText sx={{ color: !moreThan8Chars ? warning : success }}>
            More than 8 Characters
          </ListItemText>
        </ListItem>
      </List>
    </Stack>
  );
};

export default PasswordRequirements;
