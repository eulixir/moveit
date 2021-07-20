import { signIn, useSession } from 'next-auth/client';
import { ImGoogle, ImGithub } from 'react-icons/im';
import PulseLoader from 'react-spinners/PulseLoader';
import styles from './Landing.module.scss';
import { DiReact } from 'react-icons/di';
import { useRouter } from 'next/router';

export function Landing() {
  const [session] = useSession();
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
                Faça login com sua conta github <br></br> ou google para começar
              </div>
              <div className={styles.loginContainer}>
                <button
                  type="submit"
                  onClick={(): Promise<void> => signIn('github')}
                >
                  <div className={styles.GithubOpacity}>Github</div>
                  <div className={styles.GithubIconOpacity}>
                    <ImGithub size={32} />
                  </div>
                </button>

                <button
                  type="submit"
                  onClick={(): Promise<void> => signIn('google')}
                >
                  <div className={styles.GoogleIconOpacity}>
                    <ImGoogle size={32} />
                  </div>
                  <div className={styles.GoogleOpacity}>Google</div>
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
            <PulseLoader color={'white'} size={25} speedMultiplier={0.5} />
          </div>
        </div>
      )}
    </>
  );
}
