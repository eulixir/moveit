import styles from '../styles/pages/Leaderboard.module.css';

import { Navbar } from '../components/Navbar/Navbar';

import Head from 'next/head';
import React from 'react';
import Card from '../components/Card/Card';

export default function Home() {
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
            <Card position="1" />
            <Card position="2" />
            <Card position="3" />
            <Card position="4" />
            <Card position="5" />
            <Card position="6" />
            <Card position="7" />
            <Card position="8" />
            <Card position="9" />
            <Card position="10" />
            <Card position="banana" />
          </div>
        </div>
      </div>
    </>
  );
}
