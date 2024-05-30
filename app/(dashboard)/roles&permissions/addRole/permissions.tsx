import React, { useState, ChangeEvent } from 'react';
import CustomCheckbox from '@/app/components/ui/customCheckbox';
import { Stack, Box, Typography, FormControlLabel, Checkbox, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Visibility, VisibilityOutlined, AutoFixHigh, AutoFixHighOutlined, BorderColor, BorderColorOutlined, Delete, DeleteOutline } from '@mui/icons-material';
import CustomButton from '@/app/components/ui/customButtonV2';
import axios from 'axios';

interface Record {
  id: number;
  checkboxes: { checked: boolean; uncheckedIcon: JSX.Element; checkedIcon: JSX.Element }[];
}

const PermissionsTable = ({ headerCheckboxes, records, toggleHeaderCheckbox, toggleRecordCheckbox }: {
  headerCheckboxes: Array<{ checked: boolean; label: string }>,
  records: Array<Record>,
  toggleHeaderCheckbox: (index: number) => void,
  toggleRecordCheckbox: (recordId: number, index: number) => void,
}) => {

  return (
    <TableContainer>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6" fontWeight="600">
                Permissions
              </Typography>
            </TableCell>
            {headerCheckboxes.map((header, index) => (
              <TableCell key={index} sx={{padding: '15px'}}>
                <Checkbox
                  checked={header.checked}
                  onChange={() => toggleHeaderCheckbox(index)}
                />
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record, recordIndex) => (
            <TableRow key={record.id} sx={{ backgroundColor: recordIndex % 2 === 0 ? '#F6F6F6' : 'inherit', borderRadius: '8px', '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell sx={{ borderBottom: 'none', paddingRight: '7vw' }}>Allows user to control and manage buyer accounts .</TableCell>
              <TableCell colSpan={headerCheckboxes.length} >
                <Stack direction="row" spacing={10}>
                  {record.checkboxes.map((checkbox, index) => (
                    <Checkbox
                      key={index}
                      checked={checkbox.checked}
                      onChange={() => toggleRecordCheckbox(record.id, index)}
                      icon={checkbox.uncheckedIcon}
                      checkedIcon={checkbox.checkedIcon}
                      sx={{
                        color: checkbox.checked ? '#52006A' : '#905CA0',
                      }}
                    />
                  ))}
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Categories = ({ handleReset }: { handleReset: () => void }) => {

  type CheckboxStateKeys = 'inventory' | 'account' | 'suppliers' | 'catalog' | 'configuration';

  const initialState = {
    inventory: false,
    account: false,
    suppliers: false,
    catalog: false,
    configuration: false
  };

  const [checkedState, setCheckedState] = useState(initialState);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked
    }));
  };

  const checkboxStyle = (isChecked: boolean) => ({
    backgroundColor: isChecked ? '#EEE6F1' : 'inherit',
    color: isChecked ? "#52006A" : 'inherit',
    borderRadius: '4px',
    marginLeft: "0px"
  });

  const checkboxes: { name: CheckboxStateKeys, label: string }[] = [
    { name: 'inventory', label: 'Inventory' },
    { name: 'account', label: 'Account' },
    { name: 'suppliers', label: 'Suppliers' },
    { name: 'catalog', label: 'Catalog' },
    { name: 'configuration', label: 'Configuration' }
  ];

  return (
    <Stack gap={2} border="1px solid #EEE6F1" flexDirection="column" padding={1} borderRadius={2.5} width={250}>
      <Box bgcolor="#f6f6f6" padding={2} borderRadius={2.5}>
        <Typography fontWeight={600} variant="h6">
          Categories
        </Typography>
      </Box>
      {checkboxes.map((checkbox) => (
        <Stack key={checkbox.name}>
          <FormControlLabel
            style={checkboxStyle(checkedState[checkbox.name])}
            control={
              <CustomCheckbox
                checked={checkedState[checkbox.name]}
                onChange={handleCheckboxChange}
                name={checkbox.name}
                inputProps={{ 'aria-label': `checkbox with label ${checkbox.label}` }}
              />
            }
            label={checkbox.label}
          />
        </Stack>
      ))}
      <CustomButton
        bgColor="#FF8C29"
        color="#ffffff"
        label="Reset permissions"
        fullWidth={true}
        type="button"
        variant="contained"
        radius={'13px'}
        onClick={handleReset}
      />
    </Stack>
  );
};

const PermissionsManagement = () => {
  const [headerCheckboxes, setHeaderCheckboxes] = useState<Array<{ checked: boolean; label: string }>>(
    [
      { checked: false, label: 'View' },
      { checked: false, label: 'Create' },
      { checked: false, label: 'Edit' },
      { checked: false, label: 'Delete' },
    ]);

  const [records, setRecords] = useState<Array<Record>>(
    Array.from({ length: 3 }, (_, i) => ({
      id: i + 1,
      checkboxes: [
        { checked: false, uncheckedIcon: <VisibilityOutlined />, checkedIcon: <Visibility /> },
        { checked: false, uncheckedIcon: <AutoFixHighOutlined />, checkedIcon: <AutoFixHigh /> },
        { checked: false, uncheckedIcon: <BorderColorOutlined />, checkedIcon: <BorderColor /> },
        { checked: false, uncheckedIcon: <DeleteOutline />, checkedIcon: <Delete /> },
      ],
    }))
  );

  const handleReset = () => {
    setHeaderCheckboxes(headerCheckboxes.map(checkbox => ({ ...checkbox, checked: false })));
    setRecords(records.map(record => ({
      ...record,
      checkboxes: record.checkboxes.map(checkbox => ({ ...checkbox, checked: false }))
    })));
  };

  const toggleHeaderCheckbox = (index: number) => {
    setHeaderCheckboxes(prevState =>
      prevState.map((checkbox, i) => {
        if (i === index) {
          const checked = !checkbox.checked;
          setRecords(prevRecords =>
            prevRecords.map(record => ({
              ...record,
              checkboxes: record.checkboxes.map((checkbox, i) => ({
                ...checkbox,
                checked: i === index ? checked : checkbox.checked,
              })),
            }))
          );
          return { ...checkbox, checked };
        }
        return checkbox;
      })
    );
  };

  const toggleRecordCheckbox = (recordId: number, index: number) => {
    setRecords(prevRecords =>
      prevRecords.map(record =>
        record.id === recordId
          ? {
            ...record,
            checkboxes: record.checkboxes.map((checkbox, i) =>
              i === index ? { ...checkbox, checked: !checkbox.checked } : checkbox
            ),
          }
          : record
      )
    );
  };

  return (
    <Stack direction="row" spacing={4}>
      <Categories handleReset={handleReset} />
      <PermissionsTable
        headerCheckboxes={headerCheckboxes}
        records={records}
        toggleHeaderCheckbox={toggleHeaderCheckbox}
        toggleRecordCheckbox={toggleRecordCheckbox}
      />
    </Stack>
  );
};

export default PermissionsManagement;
