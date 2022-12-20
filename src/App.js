import {routes} from './routes'
import React from "react";
import { Header, Footer } from './container';
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './main.scss'
function App() {
  const location  = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [location.pathname])

  return (
      <div className='App'>
        <Header/>
        <Routes>
          {
            routes.map(el =>{
              return <Route path={el.path} element={el.element}/>
            })
          }
        </Routes>
      <Footer/>
      </div>
  );
}

export default App;
