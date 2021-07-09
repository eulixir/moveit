import styles from '../styles/pages/404.module.scss';

import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className={styles.container404}>
      <div>Opa meu mano, está indo aonde?</div>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  );
}
