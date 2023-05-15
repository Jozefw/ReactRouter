import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/Error";
import Menu from "./pages/Menu";
import Products from "./pages/Products";
import Root from './pages/Root';
import ProductDetails from './pages/ProductDetails';

const routers = createBrowserRouter([
  {path: '/',
  element:<Root></Root>,
  errorElement: <ErrorPage></ErrorPage>,
  children:[
    {path: '/', element:<Menu></Menu> },
    {path: '/products', element:<Products></Products>},
    {path:'/products/:productId',element:<ProductDetails></ProductDetails>}

  ]},
])

function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
