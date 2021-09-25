import Home from './pages/home';
import Activity from './pages/activity';
import Dome from './pages/dome';
import Intro from './pages/intro';
import Telescope from './pages/telescope';
import History from './pages/history';
import Contact from './pages/contact';
import Page from './page';

const PageList: React.FC = () => (
  <>
    <Page pageIdx={0}>
      <Home />
    </Page>
    <Page pageIdx={1}>
      <Intro />
    </Page>
    <Page pageIdx={2}>
      <Activity />
    </Page>
    <Page pageIdx={3}>
      <Dome />
    </Page>
    <Page pageIdx={4}>
      <Telescope />
    </Page>
    <Page pageIdx={5}>
      <History />
    </Page>
    <Page pageIdx={6}>
      <Contact />
    </Page>
  </>
);

export default PageList;
