import styles from './Landing.module.css';

export function Landing() {
  return (
    <div className={styles.Container}>
      <section>
        <div className={styles.logoContainer}></div>
        <div className={styles.contentLoginContainer}>
          <div className={styles.logoContainer}>
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
            <button type="submit">
              <img src="/icons/login.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
