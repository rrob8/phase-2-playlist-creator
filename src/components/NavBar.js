import { NavLink, Navigate } from "react-router-dom";
import './NavBar.css'
import {useNavigate} from 'react-router-dom'
import {PlaylistPlay, Radio} from "@mui/icons-material"

function NavBar() {

const navigate = useNavigate()

    return (

        <nav>
            <NavLink
            to='/'
            className='nav-link'
            >
            <Radio/>Home
            </NavLink>
        

            <NavLink
            to='/playlist'
            className='nav-link'
            >
            <PlaylistPlay/>Playlist
            </NavLink>

            <button
            onClick={()=> navigate(-1)}
            className='back-link'
            >
            Back
            </button>
        </nav>







    )


    }


export default NavBar