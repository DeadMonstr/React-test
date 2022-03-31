import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/App"
import {Provider} from "react-redux"


import "./styles/style.sass"
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
              <App/>
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


