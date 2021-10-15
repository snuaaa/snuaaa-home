import { css, cx } from '@emotion/css';
import logo from 'public/img/logo.png';
import Image from 'next/image';
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
    position: 'relative'
  }),
  rightLayout: css({
    position: 'relative',
    width: '50%',
    height: '100%',
  }),
  logoImageWrap: css({
    padding: '1rem 0rem'
  }),
  contentWrap : css({
    display: 'table-cell',
    width: '100%',
    height: '100%',
    padding: '5rem 10rem',
    verticalAlign: 'middle',
  }),
  contentText: css({
    fontSize: '2rem',
    fontFamily: '"Snowburst One", cursive',
    padding: '0.5rem 0rem',
    textAlign: 'left',
    '&:first-letter': {
      textShadow: '1px 0 5px'
    },
  }),
  backText: css({
    position: 'absolute',
    width: 'fit-content',
    fontSize: '18px',
    margin: '5rem 1.5rem',
    
  }),
  explainText: css({
    padding: '2rem 0rem',
    fontSize: 'small',
    float: 'left',
    textAlign: 'justify',
  }),
  photoText: css({
    float: 'right',
    padding: '1rem',
    position: 'relative',
    color: '#9CDBFF',
    fontSize: 'small',
    zIndex: 100,
  }),
  footer: css({
    padding: 'calc(50% - 7rem) 1.5rem',
    position: 'absolute',
    fontSize: 'xx-small',
    height: 'fit-content',
  })
};

const Intro: React.FC = () => (
  
  <>
    <div className={cx([styles.main])}>
      <div className={styles.backText}>&lt; BACK</div>
      <div className={styles.footer}>
        <p>ⓒ 2021, 서울대학교 아마추어 천문회.</p>
        <p>Amateur Astronomy Association, Since 1980</p>
        <p>Designed by Syeon, Programmed by Enif</p>
      </div>  
      <div className={styles.leftLayout}>
        <div className={styles.contentWrap}>
          <div className={styles.logoImageWrap}>
            <Image width={100} height={100} src={logo} alt='logo' />
          </div>
          <div className={styles.contentText}>Amateur</div>
          <div className={styles.contentText}>Astronomy</div>
          <div className={styles.contentText}>Association</div>
          <div className={styles.explainText}>AAA는 아마추어 천문활동을 사랑하는 회원들이 모여 구성한 서울대학교의 중앙 동아리입니다. 1980년 자연대 동아리로 시작하여 약 40년이 지난 현재까지 계속되어 온만큼 유구한 역사를 자랑합니다.</div>
        </div>  
        
      </div>
      <div className={styles.rightLayout}>
        <Image layout='fill' objectFit='fill' src={photo} alt='AAA18 김현용 작'></Image>
        <div className={styles.photoText}>AAA18 김현용 작</div>
      </div>
    </div>
  </>
);

export default Intro;
