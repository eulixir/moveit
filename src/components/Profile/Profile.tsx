import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './Profile.module.css';
import { sendEmail } from '../../contexts/ApiContext';

import { useSession } from 'next-auth/client';

export function Profile() {
  const [session] = useSession();
  const email = session.user.email;

  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src={session.user.image}
        onLoad={() => sendEmail(email)}
        alt="Profile picture"
      />
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
