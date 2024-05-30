'use client';

// default
import React, { CSSProperties } from 'react';
// external
import { Stack, Box } from '@mui/material';

interface CustomCardProps {
  children: React.ReactNode;
  sx: CSSProperties;
}

export default function CustomCard({ children, ...props }: CustomCardProps) {
  return (
    <Stack {...props}>
      {Object.keys(children!).map((child, i) => (
        <Box key={i}>
          {/* @ts-ignore: 'children' is possibly 'null' or 'undefined'. */}
          {children[child]}
        </Box>
      ))}
    </Stack>
  );
}
