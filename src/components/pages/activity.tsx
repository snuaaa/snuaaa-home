import { css, cx } from '@emotion/css';

const styles = {
  main: css({
    color: '#abcdef',
  }),
};

const Activity: React.FC = () => (
  <>
    <div className={cx([styles.main])}>
      ACTIVITY
    </div>
  </>
);

export default Activity;
