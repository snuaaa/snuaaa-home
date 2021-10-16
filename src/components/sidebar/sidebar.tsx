import { useMemo } from 'react';
import { css, cx } from '@emotion/css';
import usePage from 'src/hooks/usePage';
import ScrollStatusBar from './scrollStatusBar';
import Footer from './footer';
import Back from './back';

const styles = {
  wrapper: css({
    height: '100%',
    width: '20rem',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    zIndex: 1,
    transitionProperty: 'opacity',
    transitionDuration: '1s',
    transitionTimingFunction: 'ease',
  }),
};

const SideBar: React.FC = () => {

  const { index } = usePage();

  const visible = useMemo(() => css({
    opacity: index === 0 ? 0 : 1,
  }), [index]);

  return (
    <div className={cx([styles.wrapper, visible])}>
      <Back />
      <ScrollStatusBar />
      <Footer />
    </div>
  );
};

export default SideBar;
