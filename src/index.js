import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {UserValue} from './context/context.js';
import {Userproduct} from './context/product.context';
import { UserCategory } from './context/category.context';
import * as serviceworkers from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <UserValue>
      <Userproduct>
        <UserCategory>
          <App />
        </UserCategory>
      </Userproduct>  
    </UserValue>
  </BrowserRouter>

);

serviceworkers.register();
