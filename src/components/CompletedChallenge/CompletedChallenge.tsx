import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './CompletedChallenges.module.scss';
import { useContext } from 'react';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
