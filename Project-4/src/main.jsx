import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';
import Houses from './Components/Houses/Houses.jsx';
import Listing from './Components/Listing/Listing.jsx';
import { UserContext } from './Components/Context/UserContext.jsx';
import Contact from './Components/Contactus/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='Houses' element={<Houses />} />
          <Route path='Listing' element={<Listing />} />
          <Route path='Contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </UserContext>
    
  </StrictMode>
);