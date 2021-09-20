import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { css } from '@emotion/css';
import logo from 'public/img/aaa.png';
import stars from 'public/img/stars.png';

const styles = {
  wrapper: css({
    height: '100%',
    width: '100%',
  }),
  background: css({
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
  }),
  main: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: css({
    fontFamily: 'Cafe24Ssurround',
    fontSize: '1.8rem',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 0,
  }),
  logo: css({
    height: 500,
    width: 500,
  }),
  buttonWrp: css({
    '& button': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#FFFFFF',
      borderRadius: '1.5rem',
      padding: '1rem 2rem 0.8rem 2rem',
      margin: '0 1rem',
      '&:hover': {
        backgroundColor: '#4985A7',
      },
      '&:active': {
        backgroundColor: '#4985A7',
      },
    },
  }),
};

const Home: NextPage = () => (
  <>
    <Head>
      <title>SNU AAA HOME</title>
    </Head>
    <span className={styles.background}>
      <Image src={stars} layout="fill" alt="background" />
    </span>
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          서울대학교 아마추어 천문회
        </h1>
        <span className={styles.logo}>
          <Image src={logo} width={500} height={500} alt="aaa" />
        </span>
        <div className={styles.buttonWrp}>
          <button type="button">동아리 소개</button>
          <a href="https://www.snuaaa.net/" rel="noopener noreferrer">
            <button type="button">커뮤니티</button>
          </a>
          <a href="https://archive.snuaaa.net/" rel="noopener noreferrer">
            <button type="button">옛 커뮤니티</button>
          </a>
        </div>
      </main>
    </div>
  </>
);

export default Home;
