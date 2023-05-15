import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.css'

function MainNav(){
    return(
        <nav className={classes.header}>
            <ul>
                <li className={classes.list}>
                    <NavLink 
                    className ={({isActive})=> isActive ? classes.active:undefined } 
                    to="/" 
                    end >Home </NavLink>
                    <NavLink 
                    className ={({isActive})=> isActive ? classes.active:undefined }
                    to="/products"> Products</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;