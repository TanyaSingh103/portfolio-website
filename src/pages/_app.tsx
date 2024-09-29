// /pages/_app.tsx
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import React from 'react';
import { Navbar } from '../components/navbar'; // Import your Navbar component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tanya Singh</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Navbar will stay the same on every page */}
      <Navbar />
      {/* Render the current page component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
