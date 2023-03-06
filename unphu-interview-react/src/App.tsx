import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './app/Login/Login';
import {
  RouterProvider,
} from "react-router-dom";
import routes from './routes';

import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="container-fluid">
        <RouterProvider router={routes} />
    </div>
  );
}

export default App;
