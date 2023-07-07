
import './App.css';

import {BrowserRouter} from 'react-router-dom'
import Home from './Components/home/home';
import Project from './Components/project/project';
import Contact from './Components/Contact/Contact';
import Work from './Components/Work/Work';
import OverView from './Components/OverView/OverView';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return <>
<BrowserRouter >
      <Navbar/>
      <Home/>
      <OverView/>
      <Project/>
      <Work/>
      <Contact/>
</BrowserRouter>
  </>
}

export default App;

