import { css, cx, keyframes } from '@emotion/css';
import ScrollStatusBar from './scrollStatusBar';
import Footer from './footer';
import Back from './back';

const animation = {
  fadeIn: keyframes({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  }),
};

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
    animation: `${animation.fadeIn} 1s`,
  }),
};

const SideBar: React.FC = () => (

  <div className={cx([styles.wrapper])}>
    <Back />
    <ScrollStatusBar />
    <Footer />
  </div>
);

export default SideBar;
