import { css } from '@emotion/css';
import usePage from 'src/hooks/usePage';

const styles = {
  button: css({
    position: 'absolute',
    top: '0',
    marginTop: '6rem',
    cursor: 'pointer',
    color: '#FFFFFF',
    background: 'none',
    fontSize: '1.5rem',
  }),
};

const Back: React.FC = () => {

  const { reset } = usePage();

  return (
    <button type="button" className={styles.button} onClick={reset}>
      &lt; BACK
    </button>
  );
};
export default Back;
