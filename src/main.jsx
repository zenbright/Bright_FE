import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css';
import { store } from '@/config/redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
