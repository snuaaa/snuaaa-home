import { css, cx } from '@emotion/css';
import Page from 'src/components/page';
import historyData from './historyData';

const scrollbarSize = '1rem';
const gradientSize = '5rem';

const styles = {
  main: css({
    color: '#FFFFFF',
    height: '100%',
    width: 'calc(100% - 30rem)',
    padding: '3rem 0 7rem 0',
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (max-width: 800px)': {
      width: 'calc(100% - 4rem)',
    },
  }),
  title: css({
    fontFamily: '"Snowburst One", cursive',
    fontSize: '2.5rem',
    fontWeight: 'normal',
    marginBottom: '5rem',
    textAlign: 'center',
    '@media screen and (max-width: 800px)': {
      fontSize: '2rem',
    },
    '@media screen and (max-height: 800px)': {
      marginBottom: '3rem',
    },
    '@media screen and (max-height: 600px)': {
      marginBottom: '1.5rem',
    },
  }),
  historyGridContainer: css({
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridAutoFlow: 'column',
    fontFamily: 'Cafe24Ssurround',
    flexGrow: 1,
    overflow: 'auto',
    gap: '1rem',
    maskImage: `linear-gradient(to right, transparent, #000000 ${gradientSize}, #000000 calc(100% - ${gradientSize}), transparent 100% ), linear-gradient(#000000, #000000)`,
    maskRepeat: 'no-repeat, no-repeat',
    maskSize: `auto calc(100% - ${scrollbarSize}), auto ${scrollbarSize}`,
    maskPosition: 'top, bottom',
    paddingBottom: scrollbarSize,
    paddingLeft: gradientSize,
    paddingRight: gradientSize,
  }),
  historyGridItem: css({
    width: '15rem',
    '&:first-child h4': {
      color: '#FFD45F',
      position: 'relative',
      '&::after': {
        position: 'absolute',
        right: '6.5rem',
        top: 0,
        display: 'block',
        content: '""',
        height: '2.5rem',
        width: '2.5rem',
        background: 'url(/img/star_history.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      },
    },
  }),
  year: css({
    fontSize: '2rem',
    margin: '0.5rem 0',
  }),
  historyDetailGridContainer: css({
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridAutoFlow: 'row',
    flexGrow: 1,
    overflow: 'auto',
    gap: '3px 1rem',
    scrollbarColor: 'black',
    '::-webkit-scrollbar': {
      height: '10px',
      display: 'none',
      scrollbarColor: 'black',
      backgroundColor: 'black',
    },
  }),
  date: css({
    margin: 0,
  }),
  name: css({
    margin: 0,
    fontFamily: 'Cafe24SsurroundAir',
    fontSize: '0.8rem',
  }),
};

type Props = {
  data: {
    year: number,
    details: {
      date: string,
      name: string,
    }[],
  }
}

const HistoryDetail: React.FC<Props> = (props) => {
  const { data: { year, details } } = props;
  return (
    <div key={year} className={styles.historyGridItem}>
      <h4 className={styles.year}>{year}</h4>
      <div className={styles.historyDetailGridContainer}>
        {
          details.map((detail) => (
            <>
              <h5 className={styles.date}>{detail.date}</h5>
              <p className={styles.name}>{detail.name}</p>
            </>
          ))
        }
      </div>
    </div>
  );
};

const History: React.FC = () => (
  <Page>
    <div className={cx([styles.main])}>
      <h2 className={styles.title}>Our History</h2>
      <div className={styles.historyGridContainer}>
        {
          historyData
            .map((history) => (
              <HistoryDetail key={history.year} data={history} />
            ))
        }
      </div>
    </div>
  </Page>
);

export default History;
