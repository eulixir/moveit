import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './LevelUp.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button
          className={styles.closeButton}
          onClick={closeLevelUpModal}
          type="button"
        >
          <img src="./icons/close.svg" alt="Fechar modal" />
        </button>
        <footer>
          <button type="button">
            Compartilhar no Twitter <img src="/icons/twitter.svg" />
          </button>
        </footer>
      </div>
    </div>
  );
}
