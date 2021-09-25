import { css, cx } from '@emotion/css';

const styles = {
  main: css({
    color: '#FFFFFF',
  }),
};

const Intro: React.FC = () => (
  <>
    <div className={cx([styles.main])}>
      INTRO
    </div>
  </>
);

export default Intro;
