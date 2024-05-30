'use client';

// deafult
import { useState } from 'react';
// external
import {
  Stack,
  FormGroup,
  FormControlLabel,
  Typography,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

// internal
import CustomTextField from '@/app/components/ui/customTextField';
import CustomOutlinedInput from '@/app/components/ui/customOutlinedInput';
import CustomFormLabel from '@/app/components/ui/customFormlabel';
import CustomCheckbox from '@/app/components/ui/customCheckbox';
import CustomButton from '@/app/components/ui/customButton';
import CustomLink from '@/app/components/ui/customLink';

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm = ({ handleFormData }: any) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((passwordVisibility) => !passwordVisibility);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleFormData(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={2}>
        <Stack>
          <Stack>
            <CustomFormLabel>Username or email</CustomFormLabel>
            <CustomTextField
              fullWidth
              id="username"
              name="username"
              placeholder="Enter your username or email"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Stack>
          <Stack>
            <CustomFormLabel>Password</CustomFormLabel>
            <CustomOutlinedInput
              fullWidth
              type={passwordVisibility ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {passwordVisibility ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText sx={{ color: '#d32f2f', marginLeft: 2 }}>
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          </Stack>
        </Stack>
        <Stack justifyContent="space-between" direction="row" alignItems="center">
          <FormGroup>
            <FormControlLabel
              control={<CustomCheckbox defaultChecked />}
              label="Remeber this Device"
            />
          </FormGroup>
          <Typography
            component={CustomLink}
            href="/forget-password"
            fontWeight={600}
            sx={{
              textDecoration: 'none',
              color: 'secondary.main',
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
        <CustomButton
          fullWidth={true}
          color="primary"
          variant="contained"
          type="submit"
          label="Sign In"
        />
      </Stack>
    </form>
  );
};

export default LoginForm;
