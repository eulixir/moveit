import styles from './Landing.module.css';
import { useRouter } from 'next/router';

import { signIn, useSession } from 'next-auth/client';

export function Landing() {
  const [session, loading] = useSession();
  const router = useRouter();
  return (
    <div className={styles.Container}>
      <section>
        <div className={styles.logoContainer}>
          <img src="/icons/Simbolo.png" alt="" />
        </div>
        <div className={styles.contentLoginContainer}>
          <div className={styles.moveitContainer}>
            <img src="/icons/logo.svg" alt="" />
          </div>
          <div className={styles.welcomeContainer}>
            <strong>Bem-vindo</strong>
          </div>
          <div className={styles.githubContainer}>
            <img src="/icons/github.svg"></img>
            Faça login com seu github para começar
          </div>
          <div className={styles.loginContainer}>
            <input type="text" placeholder="Digite seu username" />
            {!session && (
              <>
                <button
                  type="submit"
                  onClick={(): Promise<void> => signIn('auth0')}
                >
                  <img src="/icons/login.svg" alt="" />
                </button>
              </>
            )}
            {session && (
              <button type="submit" onLoad={() => router.push('/pomodoro')}>
                <img src="/icons/login.svg" alt="" />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
