import react from 'react';
import {Link,useNavigate} from 'react-router-dom'

function Menu(){
    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/products')
    }
    return <h1>Home Page 
        <p>
        </p>
        <button onClick={navigateHandler}>Navigate Somewhere</button>
        </h1>
    
   
    
}

export default Menu