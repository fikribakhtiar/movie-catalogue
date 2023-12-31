import Detail from '../views/pages/detail';
import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Like from '../views/pages/like';

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
