import { css } from '@emotion/css';

const styles = {
  page: css({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    padding: '5rem 10rem',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  }),
};

const Page: React.FC = ({ children }) => (
  <div className={styles.page}>
    {children}
  </div>
);

export default Page;
