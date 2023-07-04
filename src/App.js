
import './App.css';
import Layout from './Components/Layout/Layout';
import {RouterProvider, createHashRouter} from 'react-router-dom'
import Home from './Components/home/home';


import Project from './Components/project/project';


function App() {

let routers =createHashRouter([
  {path:'' ,element:<Layout/> ,children:[
    {index:true , element:<Home/>},

    {path:'project', element:<Project/>}


  ]}
])

  return <>
<RouterProvider router={routers}>

  
</RouterProvider>
  </>

  
}

export default App;
