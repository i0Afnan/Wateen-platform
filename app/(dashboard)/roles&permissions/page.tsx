'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import {
  Card,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  IconButton,
  MenuItem,
  Menu,
  ListItemIcon,
  Typography,
  Avatar,
  Chip,
  Modal,
} from '@mui/material';
import { Stack } from '@mui/system';
import { visuallyHidden } from '@mui/utils';
import Header from '@/app/components/composite/headerRole';
import CustomButton from '@/app/components/ui/customButton';
import CustomCheckbox from '@/app/components/composite/table/CustomCheckbox';
import PageContainer from '@/app/components/composite/container/PageContainer';
import { IconDotsVertical, IconSearch, IconFilter, IconTrash } from '@tabler/icons-react';
import { Visibility, VisibilityOutlined, BookmarksOutlined, Bookmarks, Close } from '@mui/icons-material';
import axios from 'axios';


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

interface RolesTableType {
  id: string;
  imgsrc: string;
  role: string;
  roleID: string;
  roleUsers: string;
  status: 'Active' | 'Inactive';
  date: string;
  action: string;
}
const RolesTableData: RolesTableType[] = [
  {
    id: '1',
    imgsrc: "/images",
    role: 'Super Admin',
    roleID: '#R-0001',
    roleUsers: "02",
    status: 'Active',
    date: "12/12/2025",
    action: "",
  },
  {
    id: '2',
    imgsrc: "/images",
    role: 'Finance',
    roleID: '#R-1256',
    roleUsers: "02",
    status: 'Active',
    date: "12/12/2025",
    action: "",
  },
  {
    id: '3',
    imgsrc: "/images",
    role: 'Super Admin',
    roleID: '#R-0001',
    roleUsers: "02",
    status: 'Inactive',
    date: "12/12/2025",
    action: "",
  },
  {
    id: '4',
    imgsrc: "/images",
    role: 'HR Manager',
    roleID: '#R-0001',
    roleUsers: "02",
    status: 'Active',
    date: "12/12/2025",
    action: "",
  },
  {
    id: '5',
    imgsrc: "/images",
    role: 'Warehouse Employee',
    roleID: '#R-1562',
    roleUsers: "02",
    status: 'Active',
    date: "12/12/2025",
    action: "",
  },
  {
    id: '6',
    imgsrc: "/images",
    role: 'Finance 1 Manager',
    roleID: '#R-2156',
    roleUsers: "02",
    status: 'Inactive',
    date: "12/12/2025",
    action: "",
  },
  {
    id: '7',
    imgsrc: "/images",
    role: 'Super Admin',
    roleID: '#R-0001',
    roleUsers: "02",
    status: 'Active',
    date: "12/12/2025",
    action: "",
  },
  {
    id: '8',
    imgsrc: "/images",
    role: 'Super Admin',
    roleID: '#R-0001',
    roleUsers: "02",
    status: 'Active',
    date: "12/12/2025",
    action: "",
  },
  {
    id: '9',
    imgsrc: "/images",
    role: 'Super Admin',
    roleID: '#R-0001',
    roleUsers: "02",
    status: 'Active',
    date: "12/12/2025",
    action: "",
  },
  {
    id: '10',
    imgsrc: "/images",
    role: 'Super Admin',
    roleID: '#R-0001',
    roleUsers: "02",
    status: 'Active',
    date: "12/12/2025",
    action: "",
  },

  {
    id: '11',
    imgsrc: "/images",
    role: 'Super Admin',
    roleID: '#R-0001',
    roleUsers: "02",
    status: 'Active',
    date: "12/12/2025",
    action: "",
  },
];

const rows: RolesTableType[] = RolesTableData;

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof RolesTableType;
  label: string;
}


const headCells: HeadCell[] = [
  {
    id: 'role',
    disablePadding: false,
    label: 'Role',
  },
  {
    id: 'roleUsers',
    disablePadding: false,
    label: 'User in this role',
  },
  {
    id: 'date',
    disablePadding: false,
    label: 'Creation Date',
  },
  {
    id: 'status',
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'action',
    disablePadding: false,
    label: 'Action',
  },
];



interface RolesTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof RolesTableType) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function RolesTableHead(props: RolesTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof RolesTableType) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <CustomCheckbox
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            tabIndex={-1}
            inputProps={{
              'aria-labelledby': 'select all roles',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography variant="subtitle1" fontWeight="600">
                {headCell.label}
              </Typography>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const RolesTable = () => {
  const pageTitle = "Roles & Permissions";
  const breadcrumb = ["Dashboard", "Roles & Permissions"];
  const { push } = useRouter();

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof RolesTableType>('role');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof RolesTableType) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.role);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    push('roles&permissions/addRole/');
  };

  const handleClick = (event: React.MouseEvent<unknown>, role: string) => {
    const selectedIndex = selected.indexOf(role);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, role);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRoleUsersClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };


  const isSelected = (role: string) => selected.indexOf(role) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  
  return (
    <Stack gap={2}>
      <Header pageTitle={pageTitle} breadcrumb={breadcrumb} />
      <PageContainer title="Roles Table" description="this is Roles Table">
        <Card title="Roles Table">
          <Stack m={4}>
            <Box>
            </Box>
            <Stack justifyContent="right" flexDirection="row" gap={1} mb={2}>
              <CustomButton
                bgColor="#FF8C29"
                color="#fff"
                label="Add New Role"
                fullWidth={true}
                type="button"
                variant="contained"
                width={150}
                radius={'10px'}
                borderColor={'#fff'}
                onClick={handleButtonClick}
              />
              <CustomButton
                bgColor="#52006A"
                color="#ffffff"
                label="Import/Export"
                fullWidth={true}
                type="button"
                variant="contained"
                width={150}
                radius={'10px'}
                borderColor={'#fff'}
                onClick={handleButtonClick}
              />
            </Stack>
            <Card>
              <Box m={5} sx={{ mb: 5 }}>
                <TableContainer>
                  <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                  >
                    <RolesTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                    />
                    <TableBody>
                      {stableSort(rows, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          const isItemSelected = isSelected(row.role);
                          const labelId = `enhanced-table-checkbox-${row.id}`;

                          return (
                            <TableRow
                              hover
                              onClick={(event) => handleClick(event, row.role)}
                              role="checkbox"
                              tabIndex={-1}
                              key={row.id}
                              selected={isItemSelected}
                            >
                              <TableCell padding="checkbox">
                                <CustomCheckbox
                                  checked={isItemSelected}
                                  inputProps={{
                                    'aria-labelledby': labelId,
                                  }}
                                />
                              </TableCell>
                              <TableCell>
                                <Stack spacing={2} direction="row">
                                  <Avatar sx={{ bgcolor: '#52006A' }}>AA</Avatar>
                                  <Box>
                                    <Typography variant="h6" fontWeight="600">
                                      {row.role}
                                    </Typography>
                                    <Typography color="textSecondary" variant="subtitle2">
                                      {row.roleID}
                                    </Typography>
                                  </Box>
                                </Stack>
                              </TableCell>
                              <TableCell>
                                <Typography color="#52006A" variant="subtitle2" fontWeight="400">
                                <Chip
                                    label={row.roleUsers}
                                    sx={{
                                      backgroundColor: '#EEE6F1',
                                      color: "#52006A",
                                      height: '35px !important',
                                      borderRadius: '4px',
                                      borderColor: "#CFB8D6",
                                    }}
                                    onClick={handleRoleUsersClick}
                                    clickable
                                  />
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography color="textSecondary" variant="body1">
                                  {row.date}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Chip
                                  label={row.status}
                                  sx={{
                                    color: row.status === 'Active' ? '#36D246' : '#FF4949',
                                    backgroundColor: row.status === 'Active' ? '#B8FAB2' : '#FFB5B5',
                                    width: '55% !important',
                                    height: '30px !important',
                                    borderRadius: '100px',
                                    fontWeight: '600',
                                  }}
                                />
                              </TableCell>
                              <TableCell>
                                <IconButton onClick={handleMenuClick}>
                                  <IconDotsVertical width={18} />
                                </IconButton>
                                <Menu
                                  id="basic-menu"
                                  anchorEl={anchorEl}
                                  open={open}
                                  onClose={handleClose}
                                  MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                  }}
                                  PaperProps={{
                                    sx: {
                                      borderRadius: '16px',
                                      padding: '12px',
                                      boxShadow: `
                                        0px 4px 0px -8px rgba(0, 0, 0, 0.1),
                                        0px 0px 3px 0px rgba(0, 0, 0, 0.01),
                                        0px 0px 0px 12px rgba(0, 0, 0, 0.003)
                                      `,
                                    },
                                  }}
                                >
                                  <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                      <VisibilityOutlined width={18} />
                                    </ListItemIcon>
                                    View
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                      <Bookmarks width={18} />
                                    </ListItemIcon>
                                    Clone
                                  </MenuItem>
                                </Menu>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      {emptyRows > 0 && (
                        <TableRow
                          style={{
                            height: (dense ? 33 : 53) * emptyRows,
                          }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 20, 30]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Box>
            </Card>
          </Stack>
        </Card>
      </PageContainer>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            padding: '25px 30px',
            boxShadow: 'rgba(145, 158, 171, 0.16) 0px 4px 8px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            maxWidth: '600px',
            margin: 'auto',
            marginTop: '100px',
            borderRadius: '8px',
            position: 'relative',
            overflowY: 'auto',
            maxHeight: '51vh',
          }}
        >
          <Box
            sx={{
              padding: '18px 20px',
              backgroundColor: 'rgba(246, 246, 246, 1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '8px 8px 0 0',
            }}
          >
            <Typography variant="h6" fontWeight="600">
              Users
            </Typography>
            <IconButton onClick={handleModalClose}>
              <Close />
            </IconButton>
          </Box>
          <Box sx={{ padding: '20px' }}>
            {rows.map((row) => (
              <Stack
                key={row.id}
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ paddingTop: '15px', paddingBottom: '15px', borderBottom: '2px solid rgba(234, 239, 244, 1)' }}
              >
                <Avatar sx={{ bgcolor: 'rgba(82, 0, 106, 1)' }}>AA</Avatar>
                <Box>
                  <Typography variant="body1" fontWeight="600">
                    {row.role}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    {row.roleID}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
}

export default RolesTable;
