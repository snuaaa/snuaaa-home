import { css, cx } from '@emotion/css';
import Page from 'src/components/page';

const styles = {
  main: css({
    color: '#efabcd',
  }),
};

const History: React.FC = () => (
  <Page>
    <div className={cx([styles.main])}>
      HISTORY
    </div>
  </Page>
);

export default History;
