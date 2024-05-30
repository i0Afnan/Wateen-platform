'use client';

// default
import { ReactElement } from 'react';
import { usePathname } from 'next/navigation';
// external
import { ListItem, Typography } from '@mui/material';
// internal
import CustomLink from '../customLink';
import Active from './active';

type CustomListProps = {
  name: string;
  href?: string;
  icon: ReactElement;
  currentPath?: any;
  onClick?: any;
};

const CustomListItem = ({ href, currentPath, icon, name }: CustomListProps) => {
  const pathname = usePathname();
  const isActive = currentPath == pathname;

  return (
    <ListItem
      component={CustomLink}
      href={`${href}`}
      sx={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        gap: 1.5,
        backgroundColor: !isActive ? 'rgba(255, 255, 255, 0.08)' : '#ff8c29',
        borderRadius: 2,
        marginBottom: 2,
        cursor: 'pointer',
        paddingRight: 4,
      }}
    >
      {isActive && <Active />}
      {icon}
      <Typography color="#ffffff" fontSize={13}>
        {name}
      </Typography>
    </ListItem>
  );
};

export default CustomListItem;
