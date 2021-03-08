import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './Profile.module.css';

import { useSession } from 'next-auth/client';

export function Profile() {
  const [session] = useSession();

  const { level } = useContext(ChallengesContext);

  console.log(session.user.image);
  return (
    <div className={styles.profileContainer}>
      <img src={session.user.image} alt="Profile picture" />
      <div>
        <strong>{session.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
