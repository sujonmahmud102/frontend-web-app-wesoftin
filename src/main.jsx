import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailView from './components/DetailView/DetailView.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "details/:id",
    element: <DetailView />,

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
