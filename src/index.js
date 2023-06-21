import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <Router>
    <Routes>
      <Route path="/Auth" index element={<Auth/>}/>
      <Route path="/App"  element={<App/>}/>
      <Route path="/" index element={<Auth/>}/>
    </Routes>
    </Router>
  </React.StrictMode>,
);

