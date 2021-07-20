import styles from './Session.module.scss';
import { useRouter } from 'next/router';
import React from 'react';

export default function Session() {
  const router = useRouter();

  return (
    <div className={styles.sessionContainer}>
      <span>
        Ops, parece que você não está logado, clique no botão para voltar, e lá
        na home se logar 💙
      </span>
      <button onClick={() => router.push('/')}>HOME</button>
    </div>
  );
}
