import Image from 'next/image';
import { css } from '@emotion/css';
import stars from 'public/img/stars.png';

const styles = {
  background: css({
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
    background: 'linear-gradient(180deg, #142E50 0.39%, #193053 14.97%, #184E80 36.32%, #4B87A9 64.45%, #9CDBFF 85.28%, #FFFFFF 100.39%)',
  }),
};

const Background: React.FC = () => (
  <span className={styles.background}>
    <Image src={stars} layout="fill" alt="background" />
  </span>
);

export default Background;
