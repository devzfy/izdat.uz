import { RouterProvider } from "react-router-dom";
import {routes} from './routes'
import React from "react";
function App() {
  return (
    <React.Fragment>
      <RouterProvider router={routes}/>
    </React.Fragment>
  );
}

export default App;
