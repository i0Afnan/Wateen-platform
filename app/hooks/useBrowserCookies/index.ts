import Cookies from 'js-cookie';

const useBrowserCookies = (key: string) => {
  const setCookies = (value: unknown) => {
    try {
      Cookies.set(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  };
  const getCookies = () => {
    try {
      const item = Cookies.get(key);
      return item ? JSON.parse(item) : undefined;
    } catch (err) {
      console.error(err);
    }
  };
  const removeCookies = () => {
    try {
      Cookies.remove(key);
    } catch (err) {
      console.log(err);
    }
  };
  return { setCookies, getCookies, removeCookies };
};

export default useBrowserCookies;
