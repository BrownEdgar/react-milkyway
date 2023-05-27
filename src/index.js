<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Edgar/Todos/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

>>>>>>> 8e7faca97faea7b6ec34dd0ada5ea69753c16a16

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
