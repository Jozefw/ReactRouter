import react from 'react';
import {Link} from 'react-router-dom'

function Menu(){
const wee ={
    color:"red"
}
    return <h1 style={wee}>Home Page 
        <p>
        <Link to="/products">Products page</Link>
        </p>
        </h1>
    
   
    
}

export default Menu