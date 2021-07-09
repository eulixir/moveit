import { CountdownProvider } from '../contexts/CountdownContext';
import { Provider } from 'next-auth/client';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
