'use client';

// internal
import { Header, Footer } from './components';
import backgroundImage from './assets/images/bg.png';
import heroImage from './assets/images/hero.png';
// external
import { Box, Container, Stack } from '@mui/material';
import CustomImage from '../components/ui/customImage';

const Layout = ({ children }: any) => {
  return (
    <Box
      component="main"
      py="2rem"
      height="100vh"
      overflow="auto"
      sx={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container sx={{ justifyContent: 'space-between' }}>
        <Header />
        <Stack
          my={4}
          p={{ xs: 4, md: 8 }}
          borderRadius={6}
          alignItems="center"
          gap={8}
          bgcolor="#ffffff"
          sx={{
            flexDirection: { xs: 'column-reverse', md: 'row' },
          }}
        >
          <Stack sx={{ width: { xs: '100%', md: '50%' } }}>{children}</Stack>
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <CustomImage src={heroImage} alt="Hero" width="100%" height="100%" priority={true} />
          </Box>
        </Stack>
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
