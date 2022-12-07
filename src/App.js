import {routes} from './routes'
import React from "react";
import { Header, Footer } from './container';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
      <div className='App'>
        <Router>
        <Header/>
        <Routes>
          {
            routes.map(el =>{
              return <Route path={el.path} element={el.element}/>
            })
          }
        </Routes>
      <Footer/>
      </Router>
      </div>
  );
}

export default App;
