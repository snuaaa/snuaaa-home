import { css } from '@emotion/css';
import usePage from 'src/hooks/usePage';
import Image from 'next/image';
import logo from 'public/img/aaa.png';

const styles = {
  title: css({
    fontFamily: 'Cafe24Ssurround',
    fontSize: '1.8rem',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 0,
  }),
  logo: css({
    height: 500,
    width: 500,
  }),
  buttonWrp: css({
    '& button': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#FFFFFF',
      borderRadius: '1.5rem',
      padding: '1rem 2rem 0.8rem 2rem',
      margin: '0 1rem',
      '&:hover': {
        backgroundColor: '#4985A7',
      },
      '&:active': {
        backgroundColor: '#4985A7',
      },
    },
  }),
};

const Home: React.FC = () => {
  const { next } = usePage();

  return (
    <>
      <h1 className={styles.title}>
        서울대학교 아마추어 천문회
      </h1>
      <span className={styles.logo}>
        <Image src={logo} width={500} height={500} alt="aaa" />
      </span>
      <div className={styles.buttonWrp}>
        <button type="button" onClick={next}>동아리 소개</button>
        <a href="https://www.snuaaa.net/" rel="noopener noreferrer">
          <button type="button">커뮤니티</button>
        </a>
        <a href="https://archive.snuaaa.net/" rel="noopener noreferrer">
          <button type="button">옛 커뮤니티</button>
        </a>
      </div>
    </>
  );
};

export default Home;
