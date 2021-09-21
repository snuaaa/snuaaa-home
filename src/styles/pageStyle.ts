import { css, cx } from '@emotion/css';

const pageStyle = {
  main: css({
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: '5rem 10rem',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    top: 0,
    transitionProperty: 'top',
    transitionDuration: '1s',
    transitionTimingFunction: 'ease',
  }),
  up: css({
    top: '-100%',
  }),
  down: css({
    top: '100%',
  }),
};

export const getStyle = (index: number, target: number) => {
  if (index > target) {
    return cx([pageStyle.main, pageStyle.up]);
  }
  if (index === target) {
    return pageStyle.main;
  }
  return cx([pageStyle.main, pageStyle.down]);
};


export default pageStyle;
