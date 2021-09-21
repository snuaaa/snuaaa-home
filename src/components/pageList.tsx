import Activity from './activity';
import Dome from './dome';
import Intro from './intro';
import Telescope from './telescope';

const PageList: React.FC = () => (
  <>
    <Intro />
    <Dome />
    <Activity />
    <Telescope />
  </>
);

export default PageList;
