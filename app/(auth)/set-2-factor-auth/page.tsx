'use client';

// external
import { Box, Stack, Typography } from '@mui/material';
// internal
import Back from '../forget-password/icon/back';
import CustomLink from '@/app/components/ui/customLink';
import AuthenticatorApp from '../assets/images/icons/authenticator-app';
import Mail from '../assets/images/icons/mail';
import Phone from '../assets/images/icons/phone';
import { theme } from '@/app/theme/theme';
import { useAppSelector } from '@/app/hooks/useAppSelector';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

type ExpectedTwoFactorAuths = {
  [key: string]: {
    link: string;
    icon: any;
    title: string;
    caption: string;
  };
};

const expectedTwoFactorAuths: ExpectedTwoFactorAuths = {
  is2FAAuthenticatorAPP: {
    link: '/app',
    icon: <AuthenticatorApp />,
    title: 'Mobile app authenticator',
    caption: 'Use a mobile app to generate verification codes.',
  },
  is2FAEmail: {
    link: '/email',
    icon: <Mail />,
    title: 'Email',
    caption: 'Receive verification codes via email.',
  },
  is2FASMS: {
    link: '/sms',
    icon: <Phone />,
    title: 'SMS',
    caption: 'Receive verification codes via SMS.',
  },
};

const SetTwoFactorAuthentication = () => {
  const decodeToken = async () => {
    const accessToken = Cookies.get('accessToken');
    const encodedString = encodeURIComponent(accessToken!);
    console.log('accessToken', encodedString);
    const queryParam = `?token=${encodedString}`;
    const url = `https://api-gateway-qa.wateen.io/api/v1/DecodeToken${queryParam}`;

    try {
      const res = await axios.get(url, { headers: { accept: '*/*' } });
      console.log(res);
      Cookies.set('userName', res?.data?.result?.userName);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    decodeToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack gap={1}>
      <Stack gap={1} flexDirection={{ xs: 'column', sm: 'row' }}>
        <Typography fontSize={25} variant="h2" color="#000000" fontWeight={700}>
          Preferred way to receive
        </Typography>
        <Typography fontSize={25} variant="h2" fontWeight={700} color="primary.main">
          OTP Code
        </Typography>
      </Stack>
      <Typography>Choose how you would like to receive your one-time code.</Typography>
      <Stack mt={4} gap={2}>
        {Object.keys(expectedTwoFactorAuths).map((key, index) => {
          const active2FAOption = expectedTwoFactorAuths[key];
          return (
            <Box key={index}>
              <Stack
                flexDirection="row"
                alignItems="top"
                gap={2}
                component={CustomLink}
                href={`/set-2-factor-auth${active2FAOption.link}`}
                sx={{
                  border: '1.5px solid gray',
                  bgColor: '#ffffff',
                  '&:hover': {
                    bgcolor: 'background.default',
                    border: `1.5px solid ${theme.palette.primary.main}`,
                  },
                }}
                borderRadius={2}
                padding={2}
                minHeight={1}
              >
                {active2FAOption.icon}
                <Stack gap={1}>
                  <Typography color="brand.primary" fontWeight={700}>
                    {active2FAOption.title}
                  </Typography>
                  <Typography fontSize={14} color="gray">
                    {active2FAOption.caption}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default SetTwoFactorAuthentication;
