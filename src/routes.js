import Home from "./pages/Home";
import About from './pages/About'
import Playlist from "./pages/Playlist";
import Track from "./pages/Track";

const routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/playlist',
        element:<Playlist/>
    },
    {
        path:'/track/:id',
        element:<Track/>
    }
]

export default routes