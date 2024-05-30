'use client';

// default
import { useRouter } from 'next/navigation';
// external
import axios from 'axios';
import { Alert, Box, Stack, Typography } from '@mui/material';
// internal
import LoginForm from '../components/forms/login';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { setLoading, setError } from '@/store/slices/fetchStatusSlice';
import { storeCredentials } from '@/store/slices/credentialSlice';
import { store2FAs } from '@/store/slices/twoFactorSlice';
import { login } from '../../actions/auth';
import { useAppSelector } from '@/app/hooks/useAppSelector';
import { RootState } from '@/store/store';

const TwoFactorAuthRoutes = {
  is2FAAuthenticatorAPP: '/2-factor-authentication/app-authentication',
  is2FAEmail: '/2-factor-authentication/email-authentication',
  is2FASMS: '/2-factor-authentication/sms-authentication',
};

type FormDataProps = {
  username: string;
  password: string;
};

const Login = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const error = useAppSelector((state: RootState) => state.fetchStatus.error);

  const handleFormData = async ({ username, password }: FormDataProps) => {
    dispatch(setLoading(true));
    const url = 'https://api-qa.wateen.io/api/v1/Authorize/Login';
    const data = JSON.stringify({ username, password });

    try {
      const res = await axios.post(url, data, {
        headers: { 'Content-Type': 'application/json', accept: '*/*' },
      });

      const refreshToken = res?.data?.token_info?.refresh_token;
      if (refreshToken) {
        dispatch(setLoading(false));
        login(username);
      }

      if (!refreshToken && res.status === 200) {
        dispatch(setLoading(false));
        const twoFactorEnabled: { [key: string]: boolean } = res?.data?.twoFactorEnabled;
        const active2FAs = Object.entries(twoFactorEnabled).filter(
          ([key, value]) => value === true,
        );
        const twoFactor = Object.entries(twoFactorEnabled).reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {} as { [key: string]: boolean });
        dispatch(storeCredentials({ username, password }));
        dispatch(store2FAs(twoFactor));

        if (active2FAs.length === 1) {
          const activeKey = Object.keys(twoFactorEnabled).find(
            (key) => twoFactorEnabled[key] === true,
          );
          if (activeKey) {
            const route = TwoFactorAuthRoutes[activeKey as keyof typeof TwoFactorAuthRoutes];
            push(route);
          }
        } else if (active2FAs.length > 1) {
          const route = '/2-factor-authentication';
          push(route);
        }
      }
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setError(err?.response?.data || err?.message));
      console.error(err);
    }
  };

  return (
    <>
      <Stack gap={1}>
        <Stack gap={1} flexDirection={{ xs: 'column', sm: 'row' }}>
          <Typography fontSize={25} variant="h2" color="#000000" fontWeight={700}>
            Unlock
          </Typography>
          <Typography fontSize={25} variant="h2" fontWeight={700} color="primary.main">
            Your Inventory Oasis
          </Typography>
        </Stack>
        <Typography>Login to Wateen and simplify your inventory management.</Typography>
      </Stack>
      <LoginForm handleFormData={handleFormData} />
      <Box mt={2}>{error && <Alert severity="error">{error}</Alert>}</Box>
    </>
  );
};

export default Login;
