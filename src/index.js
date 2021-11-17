import React from 'react';
import  ReactDOM  from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import './index.scss';
import App from './App';
import store from "./Redux/store";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import Polygon from './Polygon';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <App />
      } />
      <Route path="/polygon" element={<Polygon/>} />
    </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

