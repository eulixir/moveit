import { Provider } from 'next-auth/client';
import Cookies from 'js-cookie';
import '../styles/global.scss';
import React, { useEffect } from 'react';

function Moveit({ Component, pageProps }) {
  Cookies.get('theme') === undefined ? Cookies.set('theme', 'light') : '';
  useEffect(() => {
    document.body.dataset.theme = Cookies.get('theme');
  }, []);

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default Moveit;
