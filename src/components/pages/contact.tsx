import { css, cx } from '@emotion/css';
import { useCallback } from 'react';
import Canvas from 'src/animation/canvas';
import Page from 'src/components/page';

const styles = {
  wrapper: css({
    position: 'relative',
    color: '#077DBF',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    paddingTop: '3rem',
  }),
  title: css({
    fontFamily: '"Snowburst One", cursive',
    fontSize: '3rem',
    fontWeight: 'normal',
    marginBottom: '5rem',
  }),
  aaa: css({
    fontFamily: 'Cafe24Ssurround',
    fontSize: '1.8rem',
    lineHeight: 1.5,
    marginBottom: '3rem',
  }),
  address: css({
    lineHeight: 1.5,
  }),
  sun: css({
    position: 'absolute',
    width: '6.5rem',
    height: '6.5rem',
    right: '15%',
    top: '8rem',
    borderRadius: '50%',
    background: '#FFFFFF',
    boxShadow: '0px 0px 7rem 5rem rgba(255, 255, 255, 0.8)',
  }),
  canvas: css({
    position: 'absolute',
    left: 0,
    bottom: 0,
  }),
};

const Contact: React.FC = () => {

  const canvasRef = useCallback((ref: HTMLCanvasElement) => {
    if (ref) {
      const canvas = new Canvas(ref);
      canvas.animate();
    }
  }, []);

  return (
    <Page>
      <div className={cx([styles.wrapper])}>
        <div>
          <h2 className={styles.title}>Contact Us</h2>
          <h3 className={styles.aaa}>
            서울대학교 아마추어 천문회<br />
            Amateur Astronomy Association
          </h3>
          <p className={styles.address}>
            서울특별시 관악구 관악로 1,<br />
            서울대학교 학생회관 63동 611호 (08826)<br />
            Rm. 611, Bldg. 63 (Students&apos; Union), Seoul National University<br />
            1, Gwanak-ro, Gwanak-gu, Seoul 08826, KR<br />
            <br />
            www.snuaaa.net<br />
            02-874-9374
          </p>
        </div>
      </div>
      <div className={styles.sun} />
      <canvas className={styles.canvas} ref={canvasRef} />
    </Page>
  );
};

export default Contact;
