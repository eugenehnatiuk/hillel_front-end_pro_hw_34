import React, { lazy } from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './Layout';
import Main from '../Main/Main';
const FAQ = lazy(async () => await delayForDemo(import('../FAQ/FAQ')));
const Content = lazy(
  async () => await delayForDemo(import('../Content/Content'))
);
const Contacts = lazy(
  async () => await delayForDemo(import('../Contacts/Contacts'))
);

async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return promise;
}


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
        path: 'questions',
        element: <FAQ />,
      },
      {
        path: 'content',
        element: <Content />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
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
