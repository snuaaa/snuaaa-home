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

  const { index } = usePage();

  const styles = useMemo(() => ({
    wrapper: css({
      width: '100%',
      position: 'absolute',
      transform: `translateY(${-index * 100}vh)`,
      transition: 'transform 0.5s ease',
      willChange: 'transform',
    }),
  }), [index]);

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
