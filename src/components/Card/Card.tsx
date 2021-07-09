// import { useSession } from 'next-auth/client';
import styles from './Card.module.scss';

export default function Card(props) {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardPosition}>{props.index}</div>
      <div className={styles.cardUserProfile}>
        <img src={props.user.image} alt="Profile picture" />
        <div>
          <strong>{props.user.name}</strong>
          <p>
            <img src="icons/level.svg" alt="level" />
            {'   '}
            Level {props.user.profile_data.current_level}
          </p>
        </div>
      </div>
      <div className={styles.cardChallenges}>
        {props.user.profile_data.tasks_completed}
      </div>
      <div className={styles.cardExperience}>
        {props.user.profile_data.current_experience}
      </div>
    </div>
  );
}
