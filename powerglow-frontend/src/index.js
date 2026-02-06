import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
// import Explore from './pages/Explore';
import LiveMap from './pages/LiveMap';
import PlaceDetails from './pages/PlaceDetails';
import Footfall from './pages/Footfall';
import Error404 from './pages/Error404';
import About from './pages/About';
import DayCrowd from './pages/DayCrowd';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'LiveMap',
      element:<LiveMap/>
    },
    {
      path:'PlaceDetails',
      element:<PlaceDetails/>
    },
    {
      path:'Footfall',
      element:<Footfall/>
    },
    {
      path:'About',
      element:<About/>
    },
    {
      path:'DayCrowd',
      element:<DayCrowd/>
    },
    {
      path:'*',
      element:<Error404/>
    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
