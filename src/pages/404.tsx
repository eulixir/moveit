import styles from '../styles/pages/404.module.scss';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    document.body.dataset.theme = Cookies.get('theme');
  }, []);

  return (
    <div className={styles.container404}>
      <div>Opa meu mano, está indo aonde?</div>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  );
}
