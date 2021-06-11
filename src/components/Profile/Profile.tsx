import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './Profile.module.css';
import Modal from 'react-modal';
import { useSession } from 'next-auth/client';
import api from '../../../services/api';

export function Profile() {
  const [session] = useSession();
  const email = session.user.email;
  const image = session.user.image;
  const name = session.user.name;

  const { level } = useContext(ChallengesContext);

  const url = 'http://localhost:4000/api/users';

  const [isNewUser, setIsNewUser] = useState(false);

  function sendUserData(email, image, name) {
    // console.log(email, image, name);
    api
      .post(url, {
        email: email,
        image: image,
        name: name,
      })
      .then(function (response) {
        showUserModal();
      })
      .catch(function (error) {
        console.log(error.response.data);
        return <h1>Teste</h1>;
      });
  }

  useEffect(() => {
    sendUserData(email, image, name);
  }, []);

  function showUserModal() {
    setIsNewUser(true);
  }
  if (isNewUser) {
    return (
      <Modal
        isOpen={isNewUser}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            backgroundColor: '#b90a0a',
            width: '500px',
            height: '500px',
          }}
        >
          <h1 onClick={() => setIsNewUser(false)}>Banana</h1>
        </div>
      </Modal>
    );
  }
  return (
    <div className={styles.profileContainer}>
      <img src={image} alt="Profile picture" />
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
