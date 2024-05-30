'use client';

import Back from '@/app/(auth)/forget-password/icon/back';
import CustomButton from '@/app/components/ui/customButton';
import CustomLink from '@/app/components/ui/customLink';
import { Alert, Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CustomTextField from '@/app/components/ui/customTextField';
import { useAppSelector } from '@/app/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setError, setLoading, setSuccess } from '@/store/slices/fetchStatusSlice';
import { login } from '@/app/actions/auth';

const validationSchema = yup.object({
  password: yup.string().required('Password is required').min(8).max(8),
});

const SMSAuthentication = () => {
  const credentials = useAppSelector((state: RootState) => state.credentials);
  const dispatch = useDispatch();
  const status = useAppSelector((state: RootState) => state.fetchStatus);

  const username = credentials.username;
  const password = credentials.password;

  const sendOTPOnMobileNumber = async () => {
    const queryParam = `?UserName=${username}`;
    const url = `https://api-qa.wateen.io/api/v1/Authorize/SendOTPOnMobileNumber${queryParam}`;

    try {
      if (username?.length! > 1) {
        const res = await axios.post(url, { headers: { accept: '*/*' } });
        dispatch(setSuccess(res?.data));
        dispatch(setError(null));
      }
    } catch (err) {
      dispatch(setError(err?.response?.data || err?.message));
      dispatch(setSuccess(null));
      console.error(err);
    }
  };

  useEffect(() => {
    sendOTPOnMobileNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleFormData(values);
    },
  });

  const handleFormData = async (values: any) => {
    dispatch(setLoading(true));
    const url = 'https://api-qa.wateen.io/api/v1/Authorize/LoginWith2FAEmailOrSMS';
    const data = {
      username: username,
      password: password,
      otp: values.password,
    };
    console.log(JSON.stringify(data));

    try {
      const res = await axios.post(url, JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json', accept: '*/*' },
      });

      if (res.data.token_info.refresh_token) {
        dispatch(setLoading(false));
        login(username!);
      }
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setError(err?.response?.data || err?.message));
      console.error(err);
    }
  };

  return (
    <Stack gap={1}>
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={2}
        mb={4}
        component={CustomLink}
        href="/2-factor-authentication"
      >
        <Back />
        <Typography fontWeight="700">Change 2FA method</Typography>
      </Stack>

      <Box display="flex" gap={1} flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}>
        <Typography fontSize={25} variant="h2" color="#000000" fontWeight={500}>
          Verify
        </Typography>
        <Typography fontSize={25} variant="h2" fontWeight={700} color="primary.main">
          Reset Code
        </Typography>
      </Box>
      <Typography>
        We sent a verification code to your Mobile (+966 XX XXX XXXX). Enter it here to complete
        login.
      </Typography>

      <Stack gap="2rem">
        <Stack mt="2rem" gap="2rem">
          <form onSubmit={formik.handleSubmit}>
            <Stack gap="1rem">
              <CustomTextField
                fullWidth
                id="password"
                name="password"
                placeholder="Enter your OTP"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <CustomButton
                label="Verify"
                fullWidth
                type="submit"
                variant="contained"
                color="#ffffff"
              />
            </Stack>
          </form>
          {status.error && <Alert severity="error">{status.error}</Alert>}
          {status.success && <Alert severity="success">{status.success}</Alert>}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SMSAuthentication;
