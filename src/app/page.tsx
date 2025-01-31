import React from 'react';
import Head from 'next/head';

import Presentation from "@/components/presentation";
import Footer from "@/components/footer";
import Main from "@/components/main";

const Home:React.FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Presentation/>
      <Main />
      <Footer />
    </>
  );
}

export default Home;