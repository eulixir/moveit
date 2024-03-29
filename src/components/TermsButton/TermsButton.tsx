import styles from './Terms.module.scss';
import { useRouter } from 'next/router';

export default function PrivacyButton() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/terms')}
      className={styles.TermsContainer}
    >
      <p>Termos</p>
    </div>
  );
}
