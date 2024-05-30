'use client'

import React, { useState, ChangeEvent } from 'react';

import { Stack, Box,Typography, FormControlLabel } from '@mui/material';
import CustomCheckbox from '@/app/components/ui/customCheckbox';
import CustomButton from '@/app/components/ui/customButton';

type CheckboxStateKeys = 'inventory' | 'account' | 'suppliers' | 'catalog' | 'configuration';

const Categories = () => {
    const initialState: Record<CheckboxStateKeys, boolean> = {
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

        const handleReset = () => {
        setCheckedState(initialState);
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
            onClick={handleReset}
        />
      </Stack>
    );
  };
    
  

export default Categories;