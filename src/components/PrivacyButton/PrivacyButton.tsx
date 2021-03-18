import styles from './Privacy.module.css';

import { useRouter } from 'next/router';

export default function PrivacyButton() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/privacy')}
      className={styles.PrivacyContainer}
    >
      <p>Privacidade</p>
    </div>
  );
}
