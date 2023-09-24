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
import ProviderContext from './contextApi/ProviderContext.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "details/:id",
    element: <DetailView />,
    loader: async () => {
      return fetch("./user.json");
    },
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProviderContext>
        <RouterProvider router={router} />
      </ProviderContext>
    </Provider>
  </React.StrictMode>,
)
