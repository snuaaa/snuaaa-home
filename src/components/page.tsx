import { css } from '@emotion/css';

const styles = {
  page: css({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
  }),
};

const Page: React.FC = ({ children }) => (
  <div className={styles.page}>
    {children}
  </div>
);

export default Page;
