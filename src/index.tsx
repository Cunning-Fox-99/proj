import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/layout";
import './ui-kit.scss'
import './misc.scss'
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Categories from "./components/categories/categories";
import Account from "./components/account/account";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout el={<App/>} />,
    },
    {
        path: "/login",
        element: <Layout el={<Login/>} />,
    },
    {
        path: "/registration",
        element: <Layout el={<Registration/>} />,
    },
    {
        path: "/categories",
        element: <Layout el={<Categories/>} />,
    },
    {
        path: "/account",
        element: <Layout el={<Account/>} />,
    },
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


