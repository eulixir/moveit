import styles from '../styles/pages/404.module.scss';
import { useRouter } from 'next/router';

export default function Custom404() {
  return (
    <div className={styles.container404}>
      <div>Opa meu mano, está indo aonde?</div>
      <button onClick={() => useRouter().push('/')}>Home</button>
    </div>
  );
}
