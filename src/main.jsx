import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import NproPage from '@/pages/NproPage';
import CienPorCienNaturalPage from '@/pages/CienPorCienNaturalPage';
import '@/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "quien-soy", element: <AboutPage /> },
      { path: "suplementos/npro", element: <NproPage /> },
      { path: "suplementos/cien-por-cien-natural", element: <CienPorCienNaturalPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);