import { css, cx } from '@emotion/css';
import Page from 'src/components/page';

const styles = {
  main: css({
    color: '#abcdef',
  }),
};

const Activity: React.FC = () => (
  <Page>
    <div className={cx([styles.main])}>
      ACTIVITY
    </div>
  </Page>
);

export default Activity;
