import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/css';
import PageList from 'src/components/pageList';
import Background from 'src/components/background';
import usePage from 'src/hooks/usePage';
import useThrottleScroll from 'src/hooks/useThrottleScroll';
import SideBar from 'src/components/sidebar/sidebar';

const styles = {
  wrapper: css({
    height: '100%',
    width: '100%',
  }),
};

const Main: NextPage = () => {
  const { index, next, prev } = usePage();

  useThrottleScroll(prev, () => {
    if (index > 0) {
      next();
    }
  });

  return (
    <>
      <Head>
        <title>SNU AAA HOME</title>
      </Head>
      <Background />
      {
        index > 0 &&
        <SideBar />
      }
      <div className={styles.wrapper}>
        <PageList />
      </div>
    </>
  );
};
export default Main;
