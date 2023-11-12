import Home from "./Home";

import Playlist from "./Playlist";
import TrackCard from "./TrackCard";

const routes = [
  {
    path: "/",
    element: <Home />,
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
