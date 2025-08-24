
import { BrowserRouter, Routes, Route, Link ,Outlet } from 'react-router-dom';

import './App.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Nav from './Components/Nav/Nav'
import Signup from './Components/Signup/Signup'
import Houses from './Components/Houses/Houses';
import Listing from './Components/Listing/Listing';
import Footer from './Components/Footer/Footer';


function App() {
  
  return (
  
         <div>
      
       <Nav />
       
       <Outlet />
       <Footer />
      
      
    </div>
   
    
   
  )
}

export default App