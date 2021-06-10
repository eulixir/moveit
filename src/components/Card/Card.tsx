// import { useSession } from 'next-auth/client';
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardPosition}>{props.user.position}</div>
      <div className={styles.cardUserProfile}>
        <img
          src="https://avatars.githubusercontent.com/u/56173070?v=4"
          alt="Profile picture"
        />
        <div>
          <strong>{props.user.name}</strong>
          <p>
            <img src="icons/level.svg" alt="level" />
            Level {props.user.profile_data.level}
          </p>
        </div>
      </div>
      <div className={styles.cardChallenges}>
        {props.user.profile_data.challenges_completed}
      </div>
      <div className={styles.cardExperience}>
        {props.user.profile_data.experience}
      </div>
    </div>
  );
}
