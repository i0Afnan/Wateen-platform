import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { IconPointFilled } from '@tabler/icons-react';

interface HeaderProps {
  pageTitle: string;
  breadcrumb?: string[];
}

const Header: React.FC<HeaderProps> = ({ pageTitle, breadcrumb = [] }) => {
  return (
    <Stack bgcolor="#52006a" gap={1} color="#ffffff" p={3} borderRadius={4}>
      <Box>
        <Typography fontSize={20}>{pageTitle}</Typography>
      </Box>
      <Stack flexDirection="row" alignItems="center" gap={1}>
        {breadcrumb && breadcrumb.map((segment, index) => (
          <React.Fragment key={index}>
            <Typography fontSize={12}>{segment}</Typography>
            {index !== breadcrumb.length - 1 && <IconPointFilled size={10} />}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Header;
