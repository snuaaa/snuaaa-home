import type { NextPage } from 'next';
import Head from 'next/head';
import PageList from 'src/components/pageList';
import Background from 'src/components/background';
import usePage from 'src/hooks/usePage';
import useThrottleScroll from 'src/hooks/useThrottleScroll';
import useResponsiveHeight from 'src/hooks/useResponsiveHeight';
import SideBar from 'src/components/sidebar/sidebar';
import Footer from 'src/components/sidebar/footer';
import { useMemo } from 'react';
import { css } from '@emotion/css';

const Main: NextPage = () => {
  const { index, next, prev } = usePage();
  const { responsiveHeight } = useResponsiveHeight();

  useThrottleScroll(prev, () => {
    if (index > 0) {
      next();
    }
  });

  const wrapperStyle = useMemo(() => css({
    position: 'relative',
    height: responsiveHeight,
  }), [responsiveHeight]);


  return (
    <div className={wrapperStyle}>
      <Head>
        <title>SNU AAA HOME</title>
      </Head>
      <Background />
      <SideBar />
      <PageList />
      <Footer />
    </div>
  );
};
export default Main;
