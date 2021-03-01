import styles from './Landing.module.css';

export function Landing() {
  return (
    <div className={styles.Container}>
      <section>
        <div className={styles.logoContainer}></div>
        <div className={styles.contentLoginContainer}>
          <strong>move.it</strong>
          <p>Bem vindo</p>
          <div>
            <img></img>
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
