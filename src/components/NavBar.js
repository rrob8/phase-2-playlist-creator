import { NavLink, Navigate } from "react-router-dom";
import './NavBar.css'
import {useNavigate} from 'react-router-dom'


function NavBar() {

const navigate = useNavigate()

    return (

        <nav>
            <NavLink
            to='/'
            className='nav-link'
            >
            Home
            </NavLink>
        

            <NavLink
            to='/playlist'
            className='nav-link'
            >
            Playlist
            </NavLink>

            <button
            onClick={()=> navigate(-1)}
            className='nav-link'
            >
            Back
            </button>
        </nav>







    )


    }


export default NavBar