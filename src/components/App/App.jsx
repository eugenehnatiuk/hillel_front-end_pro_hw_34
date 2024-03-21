import React, { lazy } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './Layout';
import Main from '../Main/Main';
// import FAQ from '../FAQ/FAQ';
// import Content from '../Content/Content';
// import Contacts from '../Contacts/Contacts';

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const FAQ = lazy(() => delayForDemo(import('../FAQ/FAQ')));
const Content = lazy(() => delayForDemo(import('../Content/Content')));
const Contacts = lazy(() => delayForDemo(import('../Contacts/Contacts')));

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/questions',
        element: <FAQ />,
        // lazy: () => (import('../FAQ/FAQ')),
      },
      {
        path: '/content',
        element: <Content />,
        // lazy: () => (import('../Content/Content')),
      },
      {
        path: '/contacts',
        element: <Contacts />,
        // lazy: () => (import('../Contacts/Contacts')),
      },
      {
        path: '*',
        element: '404 - Not Found',
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
