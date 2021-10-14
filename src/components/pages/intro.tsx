import { css, cx } from '@emotion/css';
import logo from 'public/img/logo.png';
import Image from 'next/image';
import photo from 'public/img/photo.png';
const styles = {
  main: css({
    
    color: '#FFFFFF',
    display: 'flex',
    width: '100%',
    height: '100%'
  }),
  leftLayout: css({
    display: 'flex',
    width: '50%',
    height: '100%',
    
    
  }),
  rightLayout: css({
    width: '50%',
    height: '100%',
    
    
  }),
  contentWrapper : css({
    width: '100%',
    height: '100%',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  contentText: css({
    fontsize: '30'
    
  }),
  backText: css({

  }),
  explainText: css({

  }),
  photoText: css({
    position: 'relative'
  }),
};

const Intro: React.FC = () => (
  <>
    <div className={cx([styles.main])}>
      <div className={styles.leftLayout}>
        <div className={styles.backText}>Back</div>
        <div className={styles.contentWrapper}>
          <Image src={logo} alt='logo' />
          <div className={styles.contentText}>Amateur</div>
          <div className={styles.contentText}>Astroomy</div>
          <div className={styles.contentText}>Association</div>
          <div className={styles.explainText}>AAA는 아마추어 천문활동을 사랑하는 회원들이 모여 구성한 서울대학교의 중앙 동아리입니다. 1980년 자연대 동아리로 시작하여 약 40년이 지난 현재까지 계속되어 온만큼 유구한 역사를 자랑합니다.</div>
        </div>
      </div>
      <div className={styles.rightLayout}>
        <Image src={photo} alt='AAA18 김현용 작'>
          
        </Image>
        <div className={styles.photoText}>AAA18 김현용 작</div>
        
      </div>
    </div>
  </>
);

export default Intro;
