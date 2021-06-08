import styles from './Landing.module.css';
import { useRouter } from 'next/router';

import { ImGoogle, ImGithub } from 'react-icons/im';

import { DiReact } from 'react-icons/di';

import { signIn, useSession } from 'next-auth/client';

import { SwapSpinner } from 'react-spinners-kit';

export function Landing() {
  const [session, loading] = useSession();
  const router = useRouter();
  return (
    <>
      {!session && (
        <>
          <div className={styles.Container}>
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
              </div>
            </div>
          </div>
        </>
      )}
      {session && (
        <div className={styles.LoadingContainer}>
          <div>
            <img
              src="/icons/login.svg"
              onLoad={() => router.push('/pomodoro')}
            />
            <SwapSpinner size={200} color={'white'} />
          </div>
        </div>
      )}
    </>
  );
}
