import { css, cx } from '@emotion/css';

const styles = {
  main: css({
    color: '#efabcd',
  }),
};

const History: React.FC = () => (
  <>
    <div className={cx([styles.main])}>
      HISTORY
    </div>
  </>
);

export default History;
