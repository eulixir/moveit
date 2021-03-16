import styles from './Landing.module.css';
import { useRouter } from 'next/router';

import { ImGoogle, ImGithub } from 'react-icons/im';

import { DiReact } from 'react-icons/di';

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
            <DiReact size={50} />
            Faça login com sua conta github ou google para começar
          </div>
          <div className={styles.loginContainer}>
            {!session && (
              <>
                <button
                  type="submit"
                  onClick={(): Promise<void> => signIn('github')}
                >
                  <ImGithub size={32} />
                  Github
                </button>

                <button
                  type="submit"
                  onClick={(): Promise<void> => signIn('google')}
                >
                  <ImGoogle size={32} />
                  Google
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
