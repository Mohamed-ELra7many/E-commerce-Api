import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/font-awesome/css/font-awesome.min.css" //import file font-awesome
import { Provider } from "react-redux"
// import {Provider} from "react-redux"
import { Store } from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={Store}>
      <App />
    </Provider>
  </>
);


