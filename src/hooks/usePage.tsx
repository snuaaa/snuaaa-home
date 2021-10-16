import { useRecoilState } from 'recoil';
import { PageName, pages } from 'src/constants';
import { pageState } from 'src/recoils/page';

const getPageIndex = (page: PageName) => pages.findIndex((_page) => page === _page);

const usePage = () => {
  const [page, setPage] = useRecoilState(pageState);
  const index = getPageIndex(page);

  const prev = () => {
    if (index > 0) {
      setPage(pages[index - 1]);
    }
  };

  const next = () => {
    if (index < pages.length - 1) {
      setPage(pages[index + 1]);
    }
  };

  const reset = () => {
    setPage(pages[0]);
  };

  const max = pages.length;

  return { reset, prev, next, index, max, page };
};

export default usePage;
