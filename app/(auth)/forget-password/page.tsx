'use client';

// external
import { Alert, Box, Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
// internal
import CustomTextField from '@/app/components/ui/customTextField';
import CustomFormLabel from '@/app/components/ui/customFormlabel';
import CustomButton from '@/app/components/ui/customButton';
import CustomLink from '@/app/components/ui/customLink';
import Back from './icon/back';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useAppSelector } from '@/app/hooks/useAppSelector';
import { RootState } from '@/store/store';
import { setLoading, setSuccess, setError } from '@/store/slices/fetchStatusSlice';

const validationSchema = yup.object({
  username: yup.string().required('Username or email is required'),
});

export default function ForgetPassword() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state: RootState) => state.fetchStatus);

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleFormData(values);
    },
  });

  const handleFormData = async (values: any) => {
    dispatch(setLoading(true));
    const queryParam = `?username=${values.username}`;
    const url = `https://api-qa.wateen.io/api/v1/Authorize/ResetPasswordLink${queryParam}`;

    try {
      const res = await axios.get(url, { headers: { accept: '*/*' } });

      if (res.status === 200) {
        dispatch(setLoading(false));
        dispatch(setSuccess(res?.data?.message));
        dispatch(setError(null));
      }
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setError(err?.response?.data?.message || err?.message));
      dispatch(setSuccess(null));
      console.error(err);
    }
  };

  return (
    <>
      <Stack gap={1}>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={2}
          mb={4}
          component={CustomLink}
          href="/login"
        >
          <Back />
          <Typography fontWeight="700">Back to Login</Typography>
        </Stack>
        <Box display="flex" gap={1} flexDirection={{ xs: 'column', sm: 'row' }}>
          <Typography fontSize={25} variant="h2" color="#000000" fontWeight={700}>
            Forget
          </Typography>
          <Typography fontSize={25} variant="h2" fontWeight={700} color="primary.main">
            Password?
          </Typography>
        </Box>
        <Typography>
          Enter the email associated with your account, we will send you a link to reset your
          password.
        </Typography>
      </Stack>

      <form onSubmit={formik.handleSubmit}>
        <Stack gap={5}>
          <Stack gap="1rem">
            <CustomFormLabel>Username</CustomFormLabel>
            <CustomTextField
              fullWidth
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Stack>
          <CustomButton
            fullWidth={true}
            color="primary"
            variant="contained"
            type="submit"
            label="Send"
          />
        </Stack>
      </form>
      <Stack mt="2rem">
        {status.error && <Alert severity="error">{status.error}</Alert>}
        {status.success && <Alert severity="success">{status.success}</Alert>}
      </Stack>
    </>
  );
}
