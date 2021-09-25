import { css, cx } from '@emotion/css';

const styles = {
  main: css({
    color: '#abcdef',
  }),
};

const Contact: React.FC = () => (
  <>
    <div className={cx([styles.main])}>
      CONTACT
    </div>
  </>
);

export default Contact;
