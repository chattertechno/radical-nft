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
import { store } from "./Global/store";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import Polygon from './Polygon';
import Arena from './pages/arena';
import Characters from './pages/characters';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <App />
      } />
      <Route path="/polygon" element={<Polygon/>} />
      <Route path="/arena" element={<Arena/>} />
      <Route path="/characters" element={<Characters/>}/>
    </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

