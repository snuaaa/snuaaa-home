import { css } from '@emotion/css';
import Image from 'next/image';
import Page from 'src/components/page';
import logo from 'public/img/logo.png';
import photo from 'public/img/photo.png';

const styles = {
  main: css({
    color: '#FFFFFF',
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'absolute',
  }),
  leftLayout: css({
    width: '50%',
    height: '100%',
    display: 'table',
    position: 'relative',
    '@media screen and (max-width: 860px)': {
      position: 'absolute',
      width: '100%',
      zIndex: 1,
      // padding: '0',
    },
  }),
  rightLayout: css({
    position: 'relative',
    width: '50%',
    height: '100%',
    '@media screen and (max-width: 860px)': {
      width: '100%',
      position: 'absolute',
    },
  }),
  logoImageWrap: css({
    padding: '1rem 0rem',
    width: 100,
    height: 100,
    '@media screen and (max-width: 860px)': {
      width: 70,
      height: 70,
      marginBottom: '2rem',
    },
  }),
  contentWrap: css({
    display: 'table-cell',
    width: '100%',
    height: '100%',
    padding: '0 10rem 0 20rem',
    verticalAlign: 'middle',
    '@media screen and (max-width: 860px)': {
      padding: '6rem 3rem 0 3rem',
      verticalAlign: 'top',
    },
  }),
  titleText: css({
    fontSize: '2.25rem',
    fontFamily: '"Snowburst One", cursive',
    padding: '0.5rem 0rem',
    textAlign: 'left',
    margin: '0rem',
    fontWeight: 'normal',
    '&:first-letter': {
      textShadow: '1px 0 5px',
    },
    '@media screen and (max-width: 860px)': {
      fontSize: '1.5rem',
    },
  }),
  explainText: css({
    padding: '2rem 0rem',
    fontSize: '1rem',
    textAlign: 'justify',
    lineHeight: 1.5,
    '@media screen and (max-width: 860px)': {
      padding: '1.5rem 0rem',
      fontSize: '0.7rem',
    },
  }),
  photoText: css({
    position: 'absolute',
    padding: '1.5rem',
    right: 0,
    color: '#9CDBFF',
    fontSize: 'small',
    '@media screen and (max-width: 860px)': {
      bottom: 0,
    },
  }),
};

const Intro: React.FC = () => (

  <Page>
    <div className={styles.main}>
      <div className={styles.leftLayout}>
        <div className={styles.contentWrap}>
          <div className={styles.logoImageWrap}>
            <Image src={logo} alt='logo' />
          </div>
          <h3 className={styles.titleText}>Amateur</h3>
          <h3 className={styles.titleText}>Astronomy</h3>
          <h3 className={styles.titleText}>Association</h3>
          <p className={styles.explainText}>
            AAA??? ???????????? ??????????????? ???????????? ???????????? ?????? ????????? ?????????????????? ?????? ??????????????????.
            1980??? ????????? ???????????? ???????????? ??? 40?????? ?????? ???????????? ???????????? ????????? ????????? ????????? ???????????????.
          </p>
        </div>
      </div>
      <div className={styles.rightLayout}>
        <Image layout='fill' objectFit='cover' src={photo} alt='AAA18 ????????? ???' />
        <div className={styles.photoText}>AAA18 ????????? ???</div>
      </div>
    </div>
  </Page>
);

export default Intro;
