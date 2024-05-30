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
    link: '/app-authentication',
    icon: <AuthenticatorApp />,
    title: 'Mobile app authenticator',
    caption: 'Use a mobile app to generate verification codes.',
  },
  is2FAEmail: {
    link: '/email-authentication',
    icon: <Mail />,
    title: 'Email',
    caption: 'Receive verification codes via email.',
  },
  is2FASMS: {
    link: '/sms-authentication',
    icon: <Phone />,
    title: 'SMS',
    caption: 'Receive verification codes via SMS.',
  },
};

const TwoFactorAuthentication = () => {
  const returnedTwoFactorAuths = useAppSelector((state: RootState) => state.active2FAs);
  const inactive2FAs = (key: any) => {
    return !returnedTwoFactorAuths[key as keyof typeof returnedTwoFactorAuths];
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
        href="/login"
      >
        <Back />
        <Typography fontWeight="700">Back to Login</Typography>
      </Stack>
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
            <Box key={index} sx={{ cursor: inactive2FAs(key) ? 'not-allowed' : 'cell' }}>
              <Stack
                flexDirection="row"
                alignItems="top"
                gap={2}
                component={CustomLink}
                href={`2-factor-authentication${active2FAOption.link}`}
                sx={{
                  pointerEvents: inactive2FAs(key) ? 'none' : 'all',
                  opacity: inactive2FAs(key) ? '0.5' : '',
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

export default TwoFactorAuthentication;
