import { css, cx } from '@emotion/css';
import usePage from 'src/hooks/usePage';
import { getStyle } from 'src/styles/pageStyle';

const styles = {
  main: css({
    color: '#FFFFFF',
  }),
};


const Intro: React.FC = () => {
  const { index } = usePage();

  return (
    <>
      <div className={cx([getStyle(index, 1), styles.main])}>
        INTRO
      </div>
    </>

  );
};
export default Intro;
