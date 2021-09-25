import usePage from 'src/hooks/usePage';
import { getStyle } from 'src/styles/pageStyle';

type Props = {
  pageIdx: number;
}

const Page: React.FC<Props> = ({ pageIdx, children }) => {
  const { index } = usePage();

  return (
    <div className={getStyle(index, pageIdx)}>
      {children}
    </div>
  );
};

export default Page;
