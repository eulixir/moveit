import { CountdownProvider } from '../contexts/CountdownContext';
import { Provider } from 'next-auth/client';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </Provider>
  );
}

export default MyApp;
