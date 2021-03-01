import { Landing } from '../components/Langing/Landing';

import Head from 'next/head';

import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <Landing />
    </div>
  );
}
