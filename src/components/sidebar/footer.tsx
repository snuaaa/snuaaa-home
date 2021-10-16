import { css } from '@emotion/css';

const styles = {
  wrapper: css({
    position: 'absolute',
    bottom: 0,
    padding: '0 1rem 3rem 2rem',
    fontSize: '0.6rem',
  }),
  paragraph: css({
    lineHeight: 1.5,
  }),
};

const Footer: React.FC = () => (
  <div className={styles.wrapper}>
    <p className={styles.paragraph}>
      &copy; 2021, 서울대학교 아마추어 천문회.<br />
      Amateur Astronomy Association, Since 1980<br />
      Designed by Syeon, Programmed by Enif, sjhbread
    </p>
  </div>
);

export default Footer;
