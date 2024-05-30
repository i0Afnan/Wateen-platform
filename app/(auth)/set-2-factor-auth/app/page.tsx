'use client';

import { Box, Stack, Typography } from '@mui/material';
import Back from '../../forget-password/icon/back';
import CustomLink from '@/app/components/ui/customLink';
import qrCode from '../../assets/images/icons/qr-code/qr-code.png';
import CustomImage from '@/app/components/ui/customImage';
import CopyToClipboard from '@/app/components/ui/copyToClipboard';
import CustomButton from '@/app/components/ui/customButton';

const AuthenticatorApp = () => {
  return (
    <Stack gap={1}>
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={2}
        mb={4}
        component={CustomLink}
        href="/set-2-factor-auth"
      >
        <Back />
        <Typography fontWeight="700">Change 2FA method</Typography>
      </Stack>
      <Box display="flex" gap={1} flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}>
        <Typography fontSize={25} variant="h2" fontWeight={700} color="primary.main">
          Mobile app
        </Typography>
        <Typography fontSize={25} variant="h2" color="#000000" fontWeight={500}>
          authenticator setup
        </Typography>
      </Box>
      <Typography>
        Use a mobile app like Google Authenticator to generate verification codes.
      </Typography>
      <Stack mt="1rem">
        <Box>
          <Typography fontWeight="700">1. Download App</Typography>
          <Typography fontSize="0.75rem">
            Use a mobile app like Google Authenticator to generate verification codes.
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700">2. Scan QR code</Typography>
          <Typography fontSize="0.75rem">Scan this QR code using the app.</Typography>
        </Box>
      </Stack>
      <Stack
        border="1px solid #e2e2e2"
        padding="2rem"
        borderRadius="1rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        gap="1rem"
        mt="1rem"
      >
        <Box width="5rem" height="5rem">
          <CustomImage src={qrCode} alt="QR code" height="100%" width="100%" priority={true} />
        </Box>
        <Typography fontSize="0.75rem">
          Cannot scan QR code? Enter the code manually in the apo.
        </Typography>
        <Stack
          flexDirection="row"
          alignItems="center"
          bgcolor="background.default"
          padding="0.5rem"
          width="100%"
          justifyContent="space-between"
          borderRadius="1rem"
        >
          <Box width="2rem" />
          <Typography fontWeight="700" color="primary.main">
            NZUK-7MP2-H6HJ-APLV
          </Typography>
          <CopyToClipboard />
        </Stack>
      </Stack>
      <CustomLink href="">
        <CustomButton
          label="Connect"
          fullWidth={true}
          color="#ffffff"
          type="button"
          variant="contained"
        />
      </CustomLink>
    </Stack>
  );
};

export default AuthenticatorApp;
