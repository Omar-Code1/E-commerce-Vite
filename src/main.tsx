import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { ThemeConfig } from './config/Theme.config';
import { store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </Provider>
  </React.StrictMode>,
);
