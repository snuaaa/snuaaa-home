import { css, cx } from '@emotion/css';

const styles = {
  main: css({
    color: '#abcdef',
  }),
};

const Telescope: React.FC = () => (
  <>
    <div className={cx([styles.main])}>
      TELESCOPE
    </div>
  </>
);

export default Telescope;
