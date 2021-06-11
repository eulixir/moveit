import styles from '../styles/pages/Leaderboard.module.css';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar/Navbar';

import Head from 'next/head';
import React from 'react';
import Card from '../components/Card/Card';

export default function Home() {
  const user_json = [
    {
      user: {
        name: 'João Pedro',
        profile_data: {
          level: '12',
          experience: '12223',
          challenges_completed: '3',
        },
        position: '1',
      },
    },
    {
      user: {
        name: 'Rafa Camarda',
        profile_data: {
          level: '12',
          experience: '12223',
          challenges_completed: '5',
        },
        position: '2',
      },
    },
  ];

  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(user_json);
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
              return <Card key={user.name} user={user.user} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
