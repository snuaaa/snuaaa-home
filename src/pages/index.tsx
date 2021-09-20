import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { css } from '@emotion/css';

const styles = {
  title: css({
    fontSize: 20,
  })
};

const Home: NextPage = () => (
  <div>
    <Head>
      <title>SNU AAA HOME</title>
    </Head>

    <main>
      <h1 className={styles.title}>
        서울대학교 아마추어 천문회
      </h1>
    </main>
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
);

export default Home;
