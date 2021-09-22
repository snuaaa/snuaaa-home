import { css, cx } from '@emotion/css';
import usePage from 'src/hooks/usePage';
import { getStyle } from 'src/styles/pageStyle';

const styles = {
  main: css({
    color: '#abcdef',
  }),
};

const Activity: React.FC = () => {
  const { index } = usePage();

  return (
    <>
      <div className={cx([getStyle(index, 2), styles.main])}>
        ACTIVITY
      </div>
    </>
  );
};

export default Activity;
