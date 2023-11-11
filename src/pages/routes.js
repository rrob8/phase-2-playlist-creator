import Home from "./Home";
import About from "./About";
import Playlist from "./Playlist";
import TrackCard from "./Track";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/playlist",
    element: <Playlist />,
  },
  {
    path: "/track/:id",
    element: <TrackCard />,
  },
];

export default routes;
