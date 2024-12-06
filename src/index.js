import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NameForm from "./chp11/NameForm";
import NameRequestForm from "./chp11/NameRequestForm";
import SignUp from "./chp11/SignUp";
import Calculator from "./chp12/Calculator";
import "./chp12/DistanceConverter.module.css"
import ProfileCard from "./chp13/ProfileCard";
import AirApp from "./air/imgs/AirApp";
import RestaurantApp from "./restaurant/imgs/RestaurantApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RestaurantApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
