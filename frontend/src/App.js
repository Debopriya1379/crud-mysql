import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet} from 'react-router-dom'
import { Home } from './pages/Home';
import { Add } from './pages/Add';
import { Update } from './pages/Update';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path='/update/:id' element={<Update/>} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />  
    </div>
  );
}

const Root = ({isAuth,setIsAuth}) => {
  return (
    <>
      <div className='root_container'>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App;
