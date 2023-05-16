import {Link} from 'react-router-dom';

const PRODUCTS = [

    {id:'p1',title:'Page One Details'},
    {id:'p2',title:'Page Two Details'},
    {id:'p3',title:'Page Three Details'},
    {id:'p4',title:'Page Four Details'},
];
function Products(){
    return (

    <>
    <h1>Products Page</h1>
    <ul>
       {PRODUCTS.map((prod)=>
        <li key={prod.id}><Link to={prod.id}>{prod.title}</Link></li>
       )}
    </ul>
    </>
    )
}

export default Products