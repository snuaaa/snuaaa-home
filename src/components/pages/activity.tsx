import { css, cx } from '@emotion/css';
import Image from 'next/image';
import Page from 'src/components/page';
import line from 'public/img/line.png';
import { useState } from 'react';

const styles = {
  main: css({ 
    color: '#abcdef',
  }),
  contentWrapper: css({
    display: 'block',
    textAlign: 'center',
    alignItems: 'center',
    paddingBottom: '5rem',
  }),
  title: css({
    fontSize: '2.25rem',
    color: 'white',
    fontFamily: '"Snowburst One", cursive',
  }),
  imageWrapper: css({
    position: 'relative',
    display: 'block',
    width: '40vw',
    paddingBottom: '7rem',
  }),
  imageStyle: css({
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    width: '2rem',
    height: '2rem',
    cursor: 'pointer',
    position: 'absolute',
    zIndex: 1,
    '&:hover': {
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
  }),
  imageStyle1: css({
    background: 'url(/img/star1.png)',
    left: '-3.5rem',
    top: '-4rem',
    '&:hover': {
      background: 'url(/img/yellowstar1.png)',
    },
  }),
  imageStyle2: css({
    background: 'url(/img/star2.png)',
    position: 'absolute',
    left: '4.2rem',
    top: '4.5rem',
    '&:hover': {
      background: 'url(/img/yellowstar2.png)',
    },
  }),
  imageStyle3: css({
    background: 'url(/img/star3.png)',
    position: 'absolute',
    left: '13.5rem',
    top: '1rem',
    '&:hover': {
      background: 'url(/img/yellowstar3.png)',
    },
  }),
  imageStyle4: css({
    background: 'url(/img/star4.png)',
    position: 'absolute',
    left: '21.7rem',
    top: '4.5rem',
    '&:hover': {
      background: 'url(/img/yellowstar4.png)',
    },
  }),
  imageStyle5: css({
    background: 'url(/img/star5.png)',
    position: 'absolute',
    left: '30rem',  
    top: '-1rem',
    '&:hover': {
      background: 'url(/img/yellowstar5.png)',
    },
  }),
  imageStyle6: css({
    background: 'url(/img/star6.png)',
    position: 'absolute',
    right: '-3rem',
    top: '3rem',
    '&:hover': {
      background: 'url(/img/yellowstar6.png)',
    },
  }),
  fontStyle: css({
    position: 'absolute',
    fontFamily: 'Cafe24SsurroundAir',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.8rem',
  }),
  fontStyle1: css({
    top: '2rem',
    width: '5rem',
    left: '-1.5rem',
  }),
  fontStyle2: css({
    top: '2rem',
    width: '5rem',
    left: '-1.5rem',  
  }),
  fontStyle3: css({
    top: '2rem',
    width: '5rem',
    left: '-1.5rem',
  }),
  fontStyle4: css({
    top: '-2.5rem',
    left: '-0.05rem',
  }),
  fontStyle5: css({
    left: '-1.5rem',
    width: '5rem',
    top: '2rem',
  }),
  fontStyle6: css({
    top: '2rem',
    width: '5rem',
    left: '-1.5rem',
  }),
  picture: css({
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    width: '10rem',
    height: '6rem',
    cursor: 'pointer',
    zIndex: 2,
  }),
  picture1: css({
    display: 'block',
    background: 'url(/img/didimdol.png)',
    left: '-7.5rem',
    top: '-4rem',
  }),
  pictureHide: css({
    display: 'none',
  }),
  picture2: css({
    display: 'block',
    background: 'url(/img/byulmoim.png)',
    left: '0.2rem',
    top: '4.5rem',
  }),
  picture3: css({
    display: 'block',
    background: 'url(/img/sogwuan.png)',
    left: '9.5rem',
    top: '1rem',
  }),
  picture4: css({
    display: 'block',
    background: 'url(/img/chulsa.png)',
    left: '17.7rem',
    top: '1.5rem',
  }),
  picture5: css({
    display: 'block',
    background: 'url(/img/sajinjeon.png)',
    left: '26rem',  
    top: '-1rem',
  }),
  picture6: css({
    display: 'block',
    background: 'url(/img/chinmokdomo.png)',
    right: '-7rem',
    top: '3rem',
  }),
  pictureFont: css({
    position: 'absolute',
    fontFamily: 'Cafe24SsurroundAir',
    textAlign: 'center',
    color: 'white',
    fontSize: '0.5rem',
    top: '6rem',
  }),
};

const Activity: React.FC = () => {
  const [isClicked, setIsClicked] = useState([0,0,0,0,0,0]);
  return (
  <Page>
      <div className={cx([styles.main])}>
        <div className={styles.contentWrapper}> 
          <p className={styles.title}>Our Activities</p>
          <p>AAA의 활동은 별방과 관측소 등에서 이루어집니다.</p>
          <p>별들을 클릭하여 AAA의 다양한 활동들을 알아보세요!</p>
        </div>
        <div className={styles.imageWrapper}>
          <button type='button' onClick={() => setIsClicked([1,0,0,0,0,0])} className={cx([styles.imageStyle1, styles.imageStyle])}> 
            <p className={cx([styles.fontStyle, styles.fontStyle1])}>디딤돌<br/>교육</p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,0,0,0,0,0])} className={isClicked[0]? cx([styles.picture1, styles.picture]) : cx([styles.pictureHide, styles.picture])}>
            <p className={cx([styles.pictureFont])}>AAA의 1년간의 천문 활동은 천체 <br/> 사진 작품으로 남아 매년 하반기 <br/> 사진전을 통해 대외에 공개합니다.</p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,1,0,0,0,0])} className={cx([styles.imageStyle2, styles.imageStyle])}>
            <p className={cx([styles.fontStyle, styles.fontStyle2])}>별모임</p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,0,0,0,0,0])} className={isClicked[1]? cx([styles.picture2, styles.picture]) : cx([styles.pictureHide, styles.picture])}>
            <p className={cx([styles.pictureFont])}>매주 열리는 별모임 활동을 통해 <br/> 아마추어 천문 실습을 합니다.</p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,0,1,0,0,0])} className={cx([styles.imageStyle3, styles.imageStyle])}>
            <p className={cx([styles.fontStyle, styles.fontStyle3])}>소규모<br/>관측회</p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,0,0,0,0,0])} className={isClicked[2]? cx([styles.picture3, styles.picture]) : cx([styles.pictureHide, styles.picture])}>
            <p className={cx([styles.pictureFont])}>날씨가 좋은 날엔 도심을 떠나 <br/> 산 속에서 별을 보는 소규모 관측회가 열립니다. </p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,0,0,1,0,0])} className={cx([styles.imageStyle4, styles.imageStyle])}>
            <p className={cx([styles.fontStyle, styles.fontStyle4])}>출사</p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,0,0,0,0,0])} className={isClicked[3]? cx([styles.picture4, styles.picture]) : cx([styles.pictureHide, styles.picture])}>
            <p className={cx([styles.pictureFont])}> 학교 근처 및 서울 근교에서 천체 <br/> 사진을 촬영해보는 활동입니다.</p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,0,0,0,1,0])} className={cx([styles.imageStyle5, styles.imageStyle])}>
            <p className={cx([styles.fontStyle, styles.fontStyle5])}>사진전</p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,0,0,0,0,0])} className={isClicked[4]? cx([styles.picture5, styles.picture]) : cx([styles.pictureHide, styles.picture])}>
            <p className={cx([styles.pictureFont])}>AAA의 1년 간의 친목 활동은 천체 <br/> 사진 작품으로 남아 매년 하반기 <br/> 사진전을 통해 대외에 공개합니다.</p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,0,0,0,0,1])} className={cx([styles.imageStyle6, styles.imageStyle])}>
            <p className={cx([styles.fontStyle, styles.fontStyle6])}>친목활동</p>
          </button>
          <button type='button' onClick={() => setIsClicked([0,0,0,0,0,0])} className={isClicked[5]? cx([styles.picture6, styles.picture]) : cx([styles.pictureHide, styles.picture])}>
            <p className={cx([styles.pictureFont])}>여름, 겨울 관측회 및 기타 <br/> 다양한 친목도모 활동을 합니다!</p>
          </button>
          <Image src={line} alt='line'/>
        </div>
      </div>
    </Page>
    );
  };
  
  

export default Activity;
