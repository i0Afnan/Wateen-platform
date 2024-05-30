// default
import { useState } from 'react';
// external
import { useFormik } from 'formik';
import * as yup from 'yup';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Typography,
  FormGroup,
  FormControlLabel,
  InputAdornment,
  IconButton,
  FormHelperText,
  MenuItem,
  RadioGroup,
  Radio,
} from '@mui/material';
// internal
import CustomButton from '@/app/components/ui/customButton';
import CustomFormLabel from '@/app/components/ui/customFormlabel';
import CustomTextField from '@/app/components/ui/customTextField';
import CustomSelect from '@/app/components/ui/customSelect';

const Header = () => {
  return (
    <Stack gap={3}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Box>
          <Typography variant="h6" color="#52006a">
            Add new Personal
          </Typography>
          <Typography>To change your personal detail , edit and save from here</Typography>
        </Box>
        <Stack flexDirection="row" gap={1}>
          <CustomButton
            bgColor="transparent"
            color="#52006a"
            label="Cancel"
            fullWidth={false}
            type="button"
            variant="outlined"
          />
          <CustomButton
            bgColor="#52006a"
            color="#ffffff"
            label="Save"
            fullWidth={false}
            type="submit"
            variant="contained"
          />
        </Stack>
      </Stack>
      <Box bgcolor="#f6f6f6" padding={2} borderRadius={2.5}>
        <Typography fontWeight={600} variant="h6" color="#52006a">
          Basic Information
        </Typography>
      </Box>
    </Stack>
  );
};

const validationSchema = yup.object({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email().required('Email is required'),
  phonenumber: yup.string().required('Phone number is required'),
  role: yup.string().required('Role is required'),
  accountstatus: yup.string().required('Account status is required'),
});

const roles = [
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'others',
    label: 'Others',
  },
];

const Form = ({ handleFormData }: any) => {
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      phonenumber: '',
      role: '',
      accountstatus: 'active',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //   handleFormData(values);
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Header />
      <Stack flexWrap="wrap" gap={2} flexDirection={{ sm: 'column', md: 'row' }}>
        <Stack width={{ md: '100%', lg: '49%' }}>
          <CustomFormLabel>First Name</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="firstname"
            name="firstname"
            placeholder="Enter the first name"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
          />
        </Stack>
        <Stack width={{ md: '100%', lg: '49%' }}>
          <CustomFormLabel>Last Name</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="lastname"
            name="lastname"
            placeholder="Enter the last name"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
          />
        </Stack>
        <Stack width={{ md: '100%', lg: '49%' }}>
          <CustomFormLabel>Username</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="username"
            name="username"
            placeholder="Enter the username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </Stack>
        <Stack width={{ md: '100%', lg: '49%' }}>
          <CustomFormLabel>Email</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="email"
            name="email"
            placeholder="Enter the email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.username}
          />
        </Stack>
        <Stack width={{ md: '100%', lg: '49%' }}>
          <CustomFormLabel>Phone Number</CustomFormLabel>
          <CustomTextField
            fullWidth
            id="phonenumber"
            name="phonenumber"
            placeholder="Enter the phone number"
            value={formik.values.phonenumber}
            onChange={formik.handleChange}
            error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
            helperText={formik.touched.phonenumber && formik.errors.phonenumber}
          />
        </Stack>
        <Stack width={{ md: '100%', lg: '49%' }}>
          <CustomFormLabel htmlFor="fs-language">Role</CustomFormLabel>
          <CustomSelect
            fullWidth
            id="role"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.touched.role && Boolean(formik.errors.role)}
            variant="outlined"
          >
            {roles.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomSelect>
          <FormHelperText sx={{ color: '#d32f2f', marginLeft: 2 }}>
            {formik.touched.role && formik.errors.role}
          </FormHelperText>
        </Stack>
        <Stack width={{ md: '100%', lg: '49%' }}>
          <CustomFormLabel htmlFor="fs-date">Expiry Date</CustomFormLabel>
          <CustomTextField type="date" id="fs-date" placeholder="John Deo" fullWidth />
        </Stack>
        <Stack width={{ md: '100%', lg: '49%' }}>
          <CustomFormLabel htmlFor="fs-date">Account status</CustomFormLabel>
          <RadioGroup
            id="accountstatus"
            name="accountstatus"
            value={formik.values.accountstatus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              height: '100%',
            }}
          >
            <FormControlLabel
              sx={{
                border: '1px solid #52006a',
                borderRadius: 2,
                paddingRight: 10,
              }}
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              sx={{
                border: '1px solid #52006a',
                borderRadius: 2,
                paddingRight: 10,
              }}
              value="inactive"
              control={<Radio />}
              label="Inactive"
            />
          </RadioGroup>
          <FormHelperText sx={{ color: '#d32f2f', marginLeft: 2 }}>
            {formik.touched.accountstatus && formik.errors.accountstatus}
          </FormHelperText>
        </Stack>
      </Stack>
    </form>
  );
};

const SetBasicInfo = () => {
  return (
    <Stack bgcolor="white" padding={3} borderRadius={4}>
      <Stack gap={3} border="2px solid #eee6F1" padding={3} borderRadius={2.5}>
        <Form />
      </Stack>
    </Stack>
  );
};

export default SetBasicInfo;
