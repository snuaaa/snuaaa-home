import { css, cx } from '@emotion/css';
import Page from 'src/components/page';

const styles = {
  main: css({
    color: '#abcdef',
  }),
};

const Telescope: React.FC = () => (
  <Page>
    <div className={cx([styles.main])}>
      TELESCOPE
    </div>
  </Page>
);

export default Telescope;
