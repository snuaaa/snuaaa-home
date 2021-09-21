import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/css';
import usePage from 'src/hooks/usePage';
import Home from 'src/components/home';
import PageList from 'src/components/pageList';
import Background from 'src/components/background';

const styles = {
  wrapper: css({
    height: '100%',
    width: '100%',
  }),
};

const Main: NextPage = () => {
  const { index } = usePage();

  return (
    <>
      <Head>
        <title>SNU AAA HOME</title>
      </Head>
      <Background />
      <div className={styles.wrapper}>
        <Home />
        {
          index > 0 &&
          <PageList />
        }
      </div>
    </>
  );
};

export default Main;
