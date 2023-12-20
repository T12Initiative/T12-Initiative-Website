import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import WhatWeDo from './pages/What-We-Do';
import WhoWeAre from './pages/Who-We-Are';
import TakeAction from './pages/Take-Action';
import Apply from './pages/Apply';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/What-We-Do',
        element: <WhatWeDo />,
      },
      {
        path: '/Who-We-Are',
        element: <WhoWeAre />,
      },
      {
        path: '/Take-Action',
        element: <TakeAction />,
      },
      {
        path: '/Apply',
        element: <Apply />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
