import styles from '../styles/pages/Leaderboard.module.scss';
import { Navbar } from '../components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import api from '../../services/api';
import Cookies from 'js-cookie';
import Head from 'next/head';
import React from 'react';

export default function Leaderboard() {
  useEffect(() => {
    document.body.dataset.theme = Cookies.get('theme');
  }, []);

  const [user, setUser] = useState([]);
  useEffect(() => {
    api
      .get('http://moveit.gigalixirapp.com/api/users/leaderboard')
      .then((response) => {
        console.log("banana");
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
    </>
  );
}
