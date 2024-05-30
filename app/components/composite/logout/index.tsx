// 'use client';

// external
import Cookies from 'js-cookie';
import axios from 'axios';
// internal
import CustomButton from '@/app/components/ui/customButton';
import useBrowserCookies from '@/app/hooks/useBrowserCookies';

export const Logout = () => {
  const { getCookies } = useBrowserCookies('refreshToken');
  const refreshToken = getCookies();

  const handleFormData = async () => {
    const url = `https://api-qa.wateen.io/api/v1/Authorize/Logout/${refreshToken}`;

    Cookies.set('success', 'Logged out successfuly');
    Cookies.remove('error');

    try {
      const res = await axios.get(url, { headers: { accept: '*/*' } });
      Cookies.remove('refreshToken');
      Cookies.remove('username');
      Cookies.remove('password');
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  // return (
  //   <>
  //     <CustomButton
  //       fullWidth={false}
  //       color="primary"
  //       variant="contained"
  //       label="Logout"
  //       type="button"
  //       onClick={handleFormData}
  //     />
  //   </>
  // );
};

export default Logout;
