import Image from 'next/image';
import { css, cx } from '@emotion/css';
import stars from 'public/img/stars.png';
import usePage from 'src/hooks/usePage';

const styles = {
  background: css({
    position: 'absolute',
    height: '500%',
    width: '100%',
    zIndex: -1,
    background: 'linear-gradient(180deg, #142E50 0.39%, #193053 14.97%, #184E80 36.32%, #4B87A9 64.45%, #9CDBFF 85.28%, #FFFFFF 100%)',
    top: 0,
    transitionProperty: 'top',
    transitionDuration: '1s',
    transitionTimingFunction: 'ease',
  }),
  stars: css({
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
  }),
};

const Background: React.FC = () => {
  const { index } = usePage();
  const backgroundStyle = css({
    top: `${index * -100}%`,
  });
  return (
    <div className={cx([styles.background, backgroundStyle])}>
      <span className={styles.stars}>
        <Image src={stars} layout="responsive" objectFit="fill" alt="background" height="100%" width="100%" />
      </span>
    </div>
  );
};
export default Background;
