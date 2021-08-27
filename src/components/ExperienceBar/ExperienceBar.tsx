import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './ExperienceBar.module.scss';
import { useContext } from 'react';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div
          className={styles.experienceBar}
          style={{ width: `${percentToNextLevel}%` }}
        />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience}xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
