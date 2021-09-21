import { atom } from 'recoil';
import { pages } from 'src/constants';

const pageState = atom({
  key: 'pageState',
  default: pages[0],
});

export { pageState };
