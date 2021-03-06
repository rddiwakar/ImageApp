import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';
// import SelectImage from './Page/selectPage';
// import AddImagePage from './Page/AddImage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    {/* <SelectImage /> */}
    {/* <AddImagePage /> */}
      <App />
    </Provider>
  // </React.StrictMode>
);


