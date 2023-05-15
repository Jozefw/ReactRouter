import {Outlet} from 'react-router-dom';
import MainNav from '../Components/MainNav';

function Root(){
    return(
        <>
        <MainNav></MainNav>
        <main>
        <Outlet></Outlet>
        </main>
        </>
    )
}

export default Root;