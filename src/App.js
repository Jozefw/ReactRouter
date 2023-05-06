import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Menu from "./pages/Menu";
import Products from "./pages/Products";

const routers = createBrowserRouter([
  {path: '/', element:<Menu></Menu> },
  {path: '/Products', element:<Products></Products>},
])

function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
