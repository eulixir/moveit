import styles from '../styles/pages/Leaderboard.module.css';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar/Navbar';

import Card from '../components/Card/Card';
import api from '../../services/api';
import Head from 'next/head';
import React from 'react';

export default function Leaderboard() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    api
      .get('https://moveit.gigalixirapp.com/api/users/leaderboard')
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
      <div className={styles.leaderboardContainer}>
        <Navbar />
        <div className={styles.leaderboardContent}>
          <h1>Leaderboard</h1>
          <div className={styles.cardTitleContainer}>
            <div>POSIÇÃO</div>
            <div>
              <span>USUÁRIO</span>
            </div>
            <div>DESAFIOS</div>
            <div>EXPERIÊNCIA</div>
          </div>
          <div className={styles.cardContainer}>
            {user.map((user) => {
              return <Card key={user.id} user={user} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
