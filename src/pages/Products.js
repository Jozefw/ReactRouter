import react,{Link} from 'react';


function Products(){
    return 
    <>
    <h1>Products Page</h1>
    <ul>
        <Link to="/products/product-1">
            Product 1
        </Link>
        <Link to="/products/product-2">
            Product 2
        </Link>
        <Link to="/products/product-3">
            Product 3
        </Link>
        <Link to="/products/product-4">
            Product 4
        </Link>
    </ul>
    
    </>
}

export default Products