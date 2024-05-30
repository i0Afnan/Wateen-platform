'use client';

// default
import React from 'react';
// external
import Logo from '@/app/assets/images/icons/logo';
import { Box, Button, List, Stack, Typography } from '@mui/material';
// internal
import {
  DashboardIcon,
  UsersIcon,
  RolesAndPermissionsIcon,
  OrganizationsIcon,
  LogoutIcon,
} from './icons';
import CustomListItem from '../../ui/customListItem';
import Wrapper from './wrapper';

const items = [
  {
    title: 'Dashboards',
    children: [
      {
        id: 1,
        href: '/dashboard',
        icon: <DashboardIcon />,
        name: 'Dashboard',
      },
    ],
  },
  {
    title: 'Users',
    children: [
      {
        id: 2,
        href: '/users',
        icon: <UsersIcon />,
        name: 'Users',
      },
      {
        id: 3,
        href: '/roles&permissions',
        icon: <RolesAndPermissionsIcon />,
        name: 'Roles & Permissions',
      },
    ],
  },
  {
    title: 'Customers',
    children: [
      {
        id: 4,
        href: '/organizations',
        icon: <OrganizationsIcon />,
        name: 'Organizations',
      },
    ],
  },
  {
    id: 5,
    icon: <LogoutIcon />,
    name: 'Logout',
  },
];

const Sidenav = () => {
  return (
    <Wrapper>
      <Stack
        alignItems="center"
        borderBottom="1.5px solid rgba(255, 255, 255, 0.31)"
        paddingY={2}
        width="100%"
      >
        <Logo />
      </Stack>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {!item.children && <CustomListItem name={item.name} icon={item.icon} />}
            {item.children && <ParentItems item={item} />}
          </React.Fragment>
        ))}
      </List>
    </Wrapper>
  );
};

export default Sidenav;

const ParentItems = ({ item }: any) => {
  return (
    <Stack>
      {item.children.map((child: any, childIndex: number) => (
        <Stack key={childIndex} gap={1}>
          <Typography
            color="#868686"
            textTransform="uppercase"
            fontWeight={600}
            fontSize={11}
            my={0.5}
          >
            {item.title}
          </Typography>
          <CustomListItem
            name={child.name}
            icon={child.icon}
            href={child.href}
            currentPath={child.href}
          />
        </Stack>
      ))}
    </Stack>
  );
};
