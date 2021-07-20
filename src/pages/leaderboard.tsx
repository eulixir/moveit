import styles from '../styles/pages/Leaderboard.module.scss';
import { Navbar } from '../components/Navbar/Navbar';
import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import { useRouter } from 'next/router';
import api from '../../services/api';
import Cookies from 'js-cookie';
import Head from 'next/head';
import React from 'react';

export default function Leaderboard() {
  const router = useRouter();

  useEffect(() => {
    document.body.dataset.theme = Cookies.get('theme');
  }, []);

  const [user, setUser] = useState([]);
  useEffect(() => {
    api
      .get('http://moveit.gigalixirapp.com/api/users/leaderboard')
      .then((response) => {
        setUser(response.data.best_moviters);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      {useSession()[0] != null ? (
        <div className={styles.leaderboardContainer}>
          <Navbar />
          <div className={styles.leaderboardContent}>
            <h1>Leaderboard</h1>
            <div className={styles.cardTitleContainer}>
              <div>POSIÇÃO</div>
              <div>
                <span>MOVITER</span>
              </div>
              <div>DESAFIOS</div>
              <div>EXPERIÊNCIA</div>
            </div>
            <div className={styles.cardContainer}>
              {user.map((user, index) => {
                return <Card key={user.id} user={user} index={index + 1} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => router.push('/')}>
            Parece que não está logado, volte para a tela incial e tenta logar
            💜
          </button>
        </div>
      )}
    </>
  );
}
