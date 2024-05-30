'use client';

// internal
// import CustomLink from '@/app/components/ui/customLink';
import ResetPasswordForm from '../components/forms/resetPassword';
// external
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Alert, Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { setError, setLoading, setSuccess } from '@/store/slices/fetchStatusSlice';
import { useAppSelector } from '@/app/hooks/useAppSelector';
import { RootState } from '@/store/store';

export default function SetPassword() {
  const { push } = useRouter();
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const status = useAppSelector((state: RootState) => state.fetchStatus);

  function containsNumber(inputValue: any) {
    const regex = /\d/;
    return regex.test(inputValue);
  }

  function containsSpecialChar(inputValue: any) {
    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return regex.test(inputValue);
  }

  const moreThan8Chars = inputValue.length > 8;

  const validationSchema = yup.object({
    password: yup
      .string()
      .required('Password is required')
      .min(9)
      .test('password', ' ', function (value) {
        return /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(value);
      })
      .test('password', ' ', function (value) {
        return /\d/.test(value);
      }),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'Password must match')
      .required('Please enter your password again'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleFormData(values);
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    setInputValue(value);
  };

  const handleFormData = async (values: any) => {
    dispatch(setLoading(true));
    const windowUrl = window.location.href;
    const startIndex = windowUrl.indexOf('set-password?') + 'set-password?'.length;
    const extractedUrl = windowUrl.substring(startIndex);
    Cookies.set('accessToken', extractedUrl);

    console.log(extractedUrl);

    const url = 'https://api-qa.wateen.io/api/v1/Authorize/ResetPassword';
    const data = JSON.stringify({
      newPassword: values.confirmPassword,
      token: extractedUrl,
    });

    try {
      const res = await axios.post(url, data, {
        headers: { 'Content-Type': 'application/json', accept: '*/*' },
      });

      if (res?.data?.success === true) {
        dispatch(setLoading(false));
        dispatch(setSuccess(res?.data?.msg));
        dispatch(setError(null));
        setTimeout(() => {
          push('/set-2-factor-auth');
        }, 1000);
      }
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setError(err?.res?.data || err?.message));
      dispatch(setSuccess(null));
      console.error(err);
    }
  };

  return (
    <>
      <Stack gap={1}>
        <Box display="flex" gap={1} flexDirection={{ xs: 'column', sm: 'row' }}>
          <Typography fontSize={25} variant="h2" color="#000000" fontWeight={700}>
            Set a Password for {''}
          </Typography>
          <Typography fontSize={25} variant="h2" fontWeight={700} color="primary.main">
            Wateen Account
          </Typography>
        </Box>
        <Typography>Set a new password for your account.</Typography>
      </Stack>

      <ResetPasswordForm
        moreThan8Chars={moreThan8Chars}
        containsNumber={containsNumber(inputValue)}
        containsSpecialChar={containsSpecialChar(inputValue)}
        formik={formik}
        handleChange={handleChange}
      />
      <Box mt="1rem">
        {status.error && <Alert severity="error">{status.error}</Alert>}
        {status.success && <Alert severity="success">{status.success}</Alert>}
      </Box>
    </>
  );
}
