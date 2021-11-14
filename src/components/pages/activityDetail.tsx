import { css, cx } from '@emotion/css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const styles = {
  wrapper: css({
    position: 'absolute',
    zIndex: 1,
    cursor: 'pointer',
  }),
  star: css({
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    width: '3.5rem',
    height: '3.5rem',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
  }),
  font: css({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-2rem',
    margin: 'auto',
    fontFamily: 'Cafe24SsurroundAir',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.8rem',
  }),
  detailWrapper: css({
    position: 'absolute',
    top: '-1.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '10rem',
  }),
  detailImg: css({
    borderRadius: '1rem',
    overflow: 'hidden',
  }),
  detailDescription: css({
    fontSize: '0.8rem',
  }),
};

type Props = {
  index: number,
  left?: string,
  top: string,
  right?: string,
  name: string,
  detailImg: StaticImageData,
  detailDescription: string,
}

const ActivityDetail: React.FC<Props> = (props) => {

  const { index, left, right, top, name, detailImg, detailDescription } = props;
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const customStyle = {
    wrapper: css({
      left,
      right,
      top,
    }),
    star: css({
      background: `url(/img/star${index}.png)`,
      '&:hover': {
        background: `url(/img/yellowstar${index}.png)`,
      },
    }),
    detailWrapper: css({
      visibility: showDetail ? 'visible' : 'hidden',
    }),
  };

  useEffect(() => {
    const onClickOut = () => {
      if (showDetail) {
        setShowDetail(false);
      }
    };
    document.addEventListener('click', onClickOut);
    return () => {
      document.removeEventListener('click', onClickOut);
    };
  }, [showDetail]);

  return (
    <div
      role="button"
      className={cx([styles.wrapper, customStyle.wrapper])}
      onClick={() => setShowDetail(!showDetail)}
      onKeyPress={() => setShowDetail(!showDetail)}
      tabIndex={index}
    >
      <button type='button' className={cx([customStyle.star, styles.star])}>
        <p className={styles.font}>
          {name}
        </p>
      </button>
      <div className={cx([customStyle.detailWrapper, styles.detailWrapper])}>
        <span className={styles.detailImg}>
          <Image src={detailImg} alt={`img_${name}`}  objectFit="cover"/>
        </span>
        <p className={styles.detailDescription}>
          {detailDescription}
        </p>
      </div>
    </div>
  );
};

export default ActivityDetail;
