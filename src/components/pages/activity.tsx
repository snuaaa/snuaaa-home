import { css, cx } from '@emotion/css';
import Image from 'next/image';
import Page from 'src/components/page';
import line from 'public/img/line.png';
import { useCallback } from 'react';
import imgDidimdol from 'public/img/didimdol.png';
import imgByulmoim from 'public/img/byulmoim.png';
import imgSogwuan from 'public/img/sogwuan.png';
import imgChulsa from 'public/img/chulsa.png';
import imgExhibition from 'public/img/sajinjeon.png';
import imgOtherActivity from 'public/img/chinmokdomo.png';
import ActivityDetail from './activityDetail';

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
    width: '50rem',
    paddingBottom: '7rem',
  }),
};

const details = [
  {
    index: 1,
    left: '-3.5rem',
    top: '-4rem',
    name: '디딤돌',
    detailImg: imgDidimdol,
    detailDescription: 'AAA의 1년간의 천문 활동은 천체\n사진 작품으로 남아 매년 하반기\n사진전을 통해 대외에 공개합니다.',
  },
  {
    index: 2,
    left: '5.5rem',
    top: '6rem',
    name: '별모임',
    detailImg: imgByulmoim,
    detailDescription: '매주 열리는 별모임 활동을 통해\n아마추어 천문 실습을 합니다.',
  },
  {
    index: 3,
    left: '17.5rem',
    top: '1rem',
    name: '소규모\n관측회',
    detailImg: imgSogwuan,
    detailDescription: '날씨가 좋은 날엔 도심을 떠나\n산 속에서 별을 보는 소규모 관측회가 열립니다.',
  },
  {
    index: 4,
    left: '28rem',
    top: '6rem',
    name: '출사',
    detailImg: imgChulsa,
    detailDescription: '학교 근처 및 서울 근교에서 천체\n사진을 촬영해보는 활동입니다.',
  },
  {
    index: 5,
    left: '38.5rem',
    top: '-3rem',
    name: '사진전',
    detailImg: imgExhibition,
    detailDescription: 'AAA의 1년간의 천문 활동은 천체\n사진 작품으로 남아 매년 하반기\n사진전을 통해 대외에 공개합니다.',
  },
  {
    index: 6,
    right: '-4rem',
    top: '4rem',
    name: '친목활동',
    detailImg: imgOtherActivity,
    detailDescription: '여름, 겨울 관측회 및 기타\n다양한 친목도모 활동을 합니다!',
  },
];

const Activity: React.FC = () => {
  const makeActivityDetails = useCallback(() => details.map((detail) => (
    <ActivityDetail
      key={`detail-${detail.index}`}
      index={detail.index}
      top={detail.top}
      left={detail.left}
      right={detail.right}
      name={detail.name || ''}
      detailImg={detail.detailImg}
      detailDescription={detail.detailDescription}
    />
  )), []);
  
  return (
    <Page>
      <div className={cx([styles.main])}>
        <div className={styles.contentWrapper}> 
          <p className={styles.title}>Our Activities</p>
          <p>AAA의 활동은 별방과 관측소 등에서 이루어집니다.</p>
          <p>별들을 클릭하여 AAA의 다양한 활동들을 알아보세요!</p>
        </div>
        <div className={styles.imageWrapper}>
          {
            makeActivityDetails()
          }
          <Image src={line} alt='line'/>
        </div>
      </div>
    </Page>
  );
};
  
  

export default Activity;
