import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './Profile.module.css';
import { sendUserData } from '../../contexts/ApiContext';

import { useSession } from 'next-auth/client';

export function Profile() {
  const [session] = useSession();
  const email = session.user.email;
  const image = session.user.image;
  const name = session.user.name;

  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src={image}
        onLoad={() => sendUserData(email, image, name)}
        alt="Profile picture"
      />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
