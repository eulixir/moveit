import styles from './Privacy.module.scss';

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
