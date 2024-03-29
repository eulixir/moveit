import { ChallengesContext } from '../../contexts/ChallengesContext';
import { useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import styles from './Profile.module.scss';
import api from '../../../services/api';
import Modal from 'react-modal';

export function Profile() {
  const [session] = useSession();
  const email = session?.user.email;
  const image = session?.user.image;
  const name = session?.user.name;

  const { level } = useContext(ChallengesContext);

  const url = 'https://moveit.gigalixirapp.com/api/users';

  const [isNewUser, setIsNewUser] = useState(false);

  function sendUserData(email, image, name) {
    api
      .post(url, {
        email: email,
        image: image,
        name: name,
      })
      .then(function (response) {
        if (response.status == 200) {
          api
            .put(url, {
              email: email,
              image: image,
              name: name,
            })
            .then(function (response) {
              console.log('Dados atualizados com sucesso ✅');
            });
        } else {
          showUserModal();
        }
      })
      .catch(function (error) {
        console.log(error);
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
        className={styles.modalContainer}
        contentLabel="Welcome to moveit"
      >
        <div className={styles.container}>
          <span>
            <strong>Opa, bem vindo ao moveit</strong>
            <br />
            <strong>Esta é uma aplicação prática da técnica de Pomodoro</strong>
          </span>
          <div className={styles.ModalContent}>
            <img src="/modal_image.svg" alt="Exercise!" />
            Para se exercitar enquanto estuda, e disputar com outros moviters.
          </div>
          <button
            onClick={() => setIsNewUser(false)}
            className={styles.closeButton}
            type="button"
          >
            VAMOS NESSA!
          </button>
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
