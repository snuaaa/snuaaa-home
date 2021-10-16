import { css, cx } from '@emotion/css';
import Page from 'src/components/page';

const styles = {
  main: css({
    color: '#cdefab',
  }),
};

const Dome: React.FC = () => (
  <Page>
    <div className={cx([styles.main])}>
      DOME
    </div>
  </Page>
);

export default Dome;
