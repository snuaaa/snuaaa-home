import { css, cx } from '@emotion/css';

const styles = {
  main: css({
    color: '#cdefab',
  }),
};

const Dome: React.FC = () => (
  <>
    <div className={cx([styles.main])}>
      DOME
    </div>
  </>
);

export default Dome;
