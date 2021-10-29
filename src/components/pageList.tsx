import { useMemo } from 'react';
import { css } from '@emotion/css';
import usePage from 'src/hooks/usePage';
import Home from './pages/home';
import Activity from './pages/activity';
import Dome from './pages/dome';
import Intro from './pages/intro';
import Telescope from './pages/telescope';
import History from './pages/history';
import Contact from './pages/contact';

const PageList: React.FC = () => {

  const { index, max } = usePage();

  const styles = useMemo(() => ({
    wrapper: css({
      height: `${max * 100}%`,
      width: '100%',
      top: `${-index * 100}vh`,
      position: 'absolute',
      transitionProperty: 'top',
      transitionDuration: '1s',
      transitionTimingFunction: 'ease',
    }),
  }), [index, max]);

  return (
    <>
      <div className={styles.wrapper}>
        <Home />
        <Intro />
        <Activity />
        <Dome />
        <Telescope />
        <History />
        <Contact />
      </div>
    </>
  );
};

export default PageList;
